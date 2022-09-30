import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewOrderComponent } from './dialogs/viewOrder/viewOrder.component';
import { OrdersComponent } from './orders.component';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [OrdersComponent, ViewOrderComponent],
})
export class OrdersModule {}
