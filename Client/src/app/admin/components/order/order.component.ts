import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from 'src/app/authentication/services/tokeStorage.service';
import { CustomerInterface } from '../../models/Customer.interface';
import { Order } from '../../models/order';
import { CustomersService } from '../../services/customers.service';
import { OrderService } from '../../services/orders.service';
import { ShareDataService } from '../../services/shareData.service';
import { ShopService } from '../../services/shopservice.service';
import { PdfGenerateService } from '../../utils/_services/pdfGenerate.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  public categories: any[] = [];
  public customers: CustomerInterface[] = [];
  public customer: any;
  public unfilteredList: any[] = [];
  public filteredList: any[] = [];
  myForm: FormGroup;
  collectionPaymentForm: FormGroup;
  amount: number;
  priceWithVAT: number;
  VATprice: number;
  user: any;
  rows: any = [];
  options: any;
  reference = `CleanAP_${Math.ceil(Math.random() * 10e10)}`;

  public isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  displayedColumns = [
    // 'CategoryName',
    'Service',
    'ServiceQuantity',
    'ServicePrice',
  ];

  ColumnMode = ColumnMode;

  constructor(
    private shopService: ShopService,
    private cutomerService: CustomersService,
    private fb: FormBuilder,
    private sharedService: ShareDataService,
    private pdfGenerate: PdfGenerateService,
    private orderService: OrderService,
    private authService: TokenStorageService
  ) {
    this.user = this.authService.getUser();
  }

  ngOnInit(): void {
    this.initializeForm();
    this.getServiceTypes();
    this.getCategorySelected();
    this.getServices();
    this.getPrice();
    if (this.user?.roleId == 1) {
      this.isAdmin.next(false);
      console.log(this.user);
      this.customer = {
        Name: this.user.name,
        Surname: this.user.surname,
      };
      console.log(this.customer);
    } else {
      this.getCustomers();
    }
    this.sharedService.data$.subscribe((res) => {
      this.customer = res;
    });
  }

  addToTable(myForm: any) {
    console.log(myForm);
    let data: any = {
      // serviceName: this.categories.find((x) => x.id === myForm.value.serviceId) .name,
      serviceId: myForm.value.serviceId,
      price: myForm.value.price,
      quantity: Number(myForm.value.quantity),
    };

    const lastItem = this.rows[this.rows.length - 1];

    var lastIndex = Object.keys(this.rows).length;

    this.rows.splice(lastIndex, 0, data);

    console.log(this.rows);

    this.rows = [...this.rows];
  }
  getTotalCost() {
    let total = this.rows
      .map((t: any) => t.price)
      .reduce((acc: any, value: any) => acc + value, 0);
    this.priceWithVAT = total + total * 0.15;
    this.VATprice = total * 0.15;
    return total;
  }
  getServiceTypes() {
    this.shopService.getAllServiceTypes().subscribe(
      (response) => {
        console.log(response);
        this.categories = Object.values(response);
        console.log(this.categories);
      },
      (error) => {}
    );
  }

  getServices() {
    this.shopService.getAll().subscribe((response) => {
      //this.services = Object.values(response);
      this.unfilteredList = Object.values(response).map((res) => {
        return {
          serviceType: this.categories.find((x) => x.id == res.serviceTypeId)
            .name,
          ...res,
        };
      });
    });
    // .catch((error) => {});
  }
  getCustomers() {
    this.cutomerService
      .getList()
      .then((response) => {
        response.docs.forEach((type) => {
          this.customers.push({
            ...type.data(),
            id: type.id,
          } as unknown as CustomerInterface);
        });

        // console.log(this.services)
      })
      .catch((error) => {});
  }
  getCategorySelected(): void {
    this.myForm.get('serviceTypeId').valueChanges.subscribe((selectedValue) => {
      console.log(selectedValue, this.unfilteredList);

      this.filteredList = [];
      this.filteredList = this.unfilteredList.filter(
        (x) => x.id == selectedValue
      );
    });
  }
  getPrice(): void {
    this.myForm.get('quantity').valueChanges.subscribe((selectedValue) => {
      console.log(selectedValue);
      const { price } = this.unfilteredList.find(
        (x) => x.id == Number(this.myForm.value.serviceId)
      );
      const totalAmount = selectedValue * price;

      this.myForm.patchValue({
        price: totalAmount,
      });
    });
  }

  PlaceOrder() {
    let data: any;
    if (this.user?.roleId == 1) {
      this.customer = this.user.id;
    }
    console.log(
      this.collectionPaymentForm.valid,
      this.myForm.valid,
      this.customer != null,
      this.rows.length > 0
    );
    if (
      this.collectionPaymentForm.valid &&
      this.myForm.valid &&
      this.customer != null &&
      this.customer != null &&
      this.rows.length > 0
    ) {
      const data: Order = {
        userId: this.customer,
        orders: this.rows,
        orderNumber: Math.round(Math.random() * 400),
        totalAmount: this.getTotalCost(),
        totalAmountWithVAT: this.priceWithVAT,
        VAT: this.VATprice,
        collectionTime: this.collectionPaymentForm.value.CollectionDate,
        invoiceDate: new Date(),
        paymentInformation: {
          paymentType: this.collectionPaymentForm.value.PaymentType,
          paymentDate: this.collectionPaymentForm.value.PaymentDate,
          paymentOrderNotes: this.collectionPaymentForm.value.PaymentOrderNotes,
        },
      };
      this.options = {
        amount: data.totalAmountWithVAT * 100,
        email: 'customer@gmail.com',
        ref: `CleanAP_${Math.ceil(Math.random() * 10e10)}`,
        currency: 'ZAR',
      };
      if (this.collectionPaymentForm.value.PaymentType == 'CreditCard') {
        document.getElementById('paystack-button').click();
      } else {
        this.orderService.createEntity(data).subscribe((_) => {
          this.pdfGenerate.generatePDF('open', data.orders, data);
        });
      }

      console.log(data);
    }
  }

  initializeForm() {
    this.myForm = this.fb.group({
      serviceTypeId: ['', Validators.required],
      serviceId: [''],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });

    this.collectionPaymentForm = this.fb.group({
      DeliveryInformation: ['', Validators.required],
      CollectionDate: ['', Validators.required],
      CollectionTime: ['', Validators.required],
      CustomerName: [
        `${this.user.name} ${this.user.surname}`,
        Validators.required,
      ],
      City: ['Pretoria', Validators.required],
      Province: ['Gauteng', Validators.required],
      PostalCode: ['5122', Validators.required],
      Region: ['Gauteng', [Validators.required]],

      PaymentType: ['', [Validators.required]],
      PaymentDate: [Date.now(), [Validators.required]],
      PaymentOrderNotes: ['', [Validators.required]],
    });
  }

  paymentDone(ref: any) {
    console.log(ref);
    // this.orderService.createEntity(ref).subscribe((_) => {
    //   this.pdfGenerate.generatePDF('open', ref.Orders, ref);
    // });
  }

  paymentCancel() {
    //
  }
}
