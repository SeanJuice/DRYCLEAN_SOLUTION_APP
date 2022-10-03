import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeComponent } from './dialogs/create-employee/create-employee.component';
import { EditEmployeeComponent } from './dialogs/edit-employee/edit-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];

  constructor(
    private Dialog: MatDialog,
    private employeesService: EmployeeService
  ) {
    this.getEmployees();
  }

  ngOnInit() {}

  Add() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '80%';

    const addClientModal = this.Dialog.open(
      CreateEmployeeComponent,
      dialogConfig
    );
    addClientModal.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  Edit(client: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '60%';
    dialogConfig.data = client;

    const modal = this.Dialog.open(EditEmployeeComponent, dialogConfig);
    modal.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  getEmployees() {
    this.employeesService.getAll().subscribe((response) => {
      this.employees = Object.values(response);
    });
  }

  remove(id: number) {
    Swal.fire({
      title: 'Are you sure you want to remove this Employee?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result: { isConfirmed: any }) => {
      if (result.isConfirmed) {
        this.employeesService.deleteEntity(id).then((s) => {
          console.log(s);
          Swal.fire('Deleted!', 'employee has been deleted.', 'success');
          // this.
        });
      }
    });
  }
}
