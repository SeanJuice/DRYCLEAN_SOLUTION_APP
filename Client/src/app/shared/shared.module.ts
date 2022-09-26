import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { NgChartsModule } from 'ng2-charts';
import { TableComponent } from './ui/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipe/pipe';
import { ToastrModule } from 'ngx-toastr';
import { FilterByKeyPipeModule } from '../admin/utils/_pipes/filter-by-key-pipe.module';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SearchDropdown } from './ui/search-dropdown/search-dropdown.component';
import { ShareDataService } from '../admin/services/shareData.service';
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R ",
  suffix: "",
  thousands: "."
};
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FilterByKeyPipeModule,
    CurrencyMaskModule,
    NgxDatatableModule
  ],
  exports: [
    CurrencyMaskModule,
    MaterialModule,
    NgChartsModule,
    TableComponent,
    SearchFilterPipe,
    ToastrModule,
    FilterByKeyPipeModule,
    NgxDatatableModule,
    SearchDropdown
  ],
  declarations: [
    TableComponent,
    SearchFilterPipe,
    SearchDropdown
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    ShareDataService
],
})
export class SharedModule { }
