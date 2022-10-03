import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuditTrailComponent } from './components/auditTrail/auditTrail.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CancelationReportComponent } from './components/dashboard/components/cancelation-report/cancelation-report.component';
import { DailyCashUpComponent } from './components/dashboard/components/daily-cash-up/daily-cash-up.component';
import { MonthlySalesComponent } from './components/dashboard/components/monthly-sales/monthly-sales.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShopsComponent } from './components/shops/shops.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'monthly-sales', component: MonthlySalesComponent },
          { path: 'daily-cash-up', component: DailyCashUpComponent },
          { path: 'cancelation-report', component: CancelationReportComponent },
        ],
      },
      { path: 'services', component: MyServicesComponent },
      { path: 'customers', component: ClientsComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'shops', component: ShopsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'order', component: OrderComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'auditTrail', component: AuditTrailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
