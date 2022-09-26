import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './dialogs/create-employee/create-employee.component';
import { EditEmployeeComponent } from './dialogs/edit-employee/edit-employee.component';
import { ReactiveFormsModule,  } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';

@NgModule({
  imports: [
    RouterModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
  ],
  declarations: [CreateEmployeeComponent,EditEmployeeComponent, EmployeesComponent]
})
export class EmployeesModule { }
