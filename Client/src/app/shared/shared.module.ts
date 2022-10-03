import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgChartsModule } from 'ng2-charts';
import {
  CurrencyMaskConfig,
  CurrencyMaskModule,
  CURRENCY_MASK_CONFIG,
} from 'ng2-currency-mask';
import { ToastrModule } from 'ngx-toastr';
import { ShareDataService } from '../admin/services/shareData.service';
import { FilterByKeyPipeModule } from '../admin/utils/_pipes/filter-by-key-pipe.module';
import { UploadDetailsComponent } from './file-upload/upload-details/upload-details.component';
import { UploadFormComponent } from './file-upload/upload-form/upload-form.component';
import { UploadListComponent } from './file-upload/upload-list/upload-list.component';
import { MaterialModule } from './material.module';
import { SearchFilterPipe } from './pipe/pipe';
import { SearchDropdown } from './ui/search-dropdown/search-dropdown.component';
import { TableComponent } from './ui/table/table.component';
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: 'R ',
  suffix: '',
  thousands: '.',
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
    NgxDatatableModule,
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
    SearchDropdown,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent,
  ],
  declarations: [
    TableComponent,
    SearchFilterPipe,
    SearchDropdown,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent,
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    ShareDataService,
  ],
})
export class SharedModule {}
