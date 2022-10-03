import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShopsComponent } from './components/shops/shops.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Angular4PaystackModule } from 'angular4-paystack';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './components/clients/clients.component';
import { CreateClientComponent } from './components/clients/dialogs/create-client/create-client.component';
import { UpdateClientComponent } from './components/clients/dialogs/update/update-client.component';
import { CancelationReportComponent } from './components/dashboard/components/cancelation-report/cancelation-report.component';
import { DailyCashUpComponent } from './components/dashboard/components/daily-cash-up/daily-cash-up.component';
import { MonthlySalesComponent } from './components/dashboard/components/monthly-sales/monthly-sales.component';
import { EmployeesModule } from './components/employees/employees.module';
import { OrdersModule } from './components/orders/orders.module';

// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuditTrailModule } from './components/auditTrail/auditTrail.module';
import { CreateShopComponent } from './components/shops/dialogs/create-shop/create-shop.component';
import { EditShopComponent } from './components/shops/dialogs/edit-shop/edit-shop.component';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    AdminRoutingModule,
    NgChartsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    EmployeesModule,
    Angular4PaystackModule.forRoot(
      'pk_test_c613fc7d428a64fd1e5daea22f8380551b28c78e'
    ),
    OrdersModule,
    NgxSpinnerModule,
    AuditTrailModule,
  ],
  declarations: [
    HomeComponent,
    MyServicesComponent,
    ShopsComponent,
    DashboardComponent,
    ProfileComponent,
    SidenavComponent,
    HeaderComponent,
    AdminComponent,
    OrderComponent,
    MonthlySalesComponent,
    DailyCashUpComponent,
    CancelationReportComponent,
    ClientsComponent,

    //modals
    UpdateClientComponent,
    CreateClientComponent,
    CreateShopComponent,
    EditShopComponent,
  ],
  providers: [],
  exports: [],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
