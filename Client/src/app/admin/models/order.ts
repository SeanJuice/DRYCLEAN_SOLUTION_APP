class OrderLine {
  id?: number;
  quantity: number;
  price: number;
  orderId?: number;
  serviceId: number;
}

export class PaymentInformation {
  id?: number;
  paymentDate: Date;
  paymentType: number;
  paymentOrderNotes?: string;
  orderId?: number;
}

export class Order {
  public id?: number;

  public invoiceDate: Date;

  public collectionTime: Date;

  public orderNumber: number;

  public VAT: number;

  public totalAmount: number;

  public totalAmountWithVAT: number;

  orders: OrderLine[];

  paymentInformation?: PaymentInformation;

  public userId: number;
}
