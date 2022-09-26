import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { ShopsComponent } from './components/shops/shops.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AdminRoutingModule } from './admin-routing.module';
import { OrderComponent } from './components/order/order.component';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';
import { MonthlySalesComponent } from './components/dashboard/components/monthly-sales/monthly-sales.component';
import { DailyCashUpComponent } from './components/dashboard/components/daily-cash-up/daily-cash-up.component';
import { CancelationReportComponent } from './components/dashboard/components/cancelation-report/cancelation-report.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './components/clients/clients.component';
import { CreateClientComponent } from './components/clients/dialogs/create-client/create-client.component';
import { UpdateClientComponent } from './components/clients/dialogs/update/update-client.component';
import { ShareDataService } from './services/shareData.service';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { EmployeesModule } from './components/employees/employees.module';
import { Angular4PaystackModule } from 'angular4-paystack';
import { OrdersModule } from './components/orders/orders.module';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner"
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
        Angular4PaystackModule.forRoot('pk_test_c613fc7d428a64fd1e5daea22f8380551b28c78e'),
        OrdersModule,
        NgxSpinnerModule,
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
        EditShopComponent

    ],
    providers: [],
    exports: [],
    entryComponents: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class AdminModule {}