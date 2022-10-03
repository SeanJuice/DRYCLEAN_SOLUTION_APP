import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuditTrailComponent } from './auditTrail.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSortModule,
    MatTableModule,
  ],
  declarations: [AuditTrailComponent],
})
export class AuditTrailModule {}
