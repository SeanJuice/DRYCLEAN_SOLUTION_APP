import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { AuditTrailService } from '../../services/auditTrail.service';

@Component({
  selector: 'app-auditTrail',
  templateUrl: './auditTrail.component.html',
  styleUrls: ['./auditTrail.component.css'],
})
export class AuditTrailComponent implements OnInit {
  @ViewChild('recentProductsTable', { read: MatSort })
  TableMatSort: MatSort;
  data: any;
  isAdmin: boolean = false;
  DataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  AuditTableColumns: string[] = ['Username', 'Operation', 'Table', 'Date'];

  constructor(
    private AuditTrailervice: AuditTrailService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngOnChages(): void {
    //  this.router.navigate(['../staff-product-list']);
  }

  getAllProducts(): void {
    this.AuditTrailervice.getList()
      .then((response: any) => {
        this.data = [];
        response.docs.forEach((type: any) => {
          this.data.push({ ...type.data(), Id: type.id });
        });
        console.log(this.data);
      })
      .then((n: any) => {
        this.DataSource = new MatTableDataSource(this.data);
        this.DataSource.paginator = this.paginator;
      })
      .catch((error: any) => {});
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit(): void {
    // Make the data source sortable
    this.DataSource.sort = this.TableMatSort;
  }

  trackByFn(index: number, item: any): any {
    return item.ActivityID || index;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.DataSource.filter = filterValue.trim().toLowerCase();

    if (this.DataSource.paginator) {
      this.DataSource.paginator.firstPage();
    }
  }

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'AuditTrail.xlsx');
  }
}
