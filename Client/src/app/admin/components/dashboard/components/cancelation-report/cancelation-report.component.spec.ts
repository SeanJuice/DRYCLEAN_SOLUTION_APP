import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelationReportComponent } from './cancelation-report.component';

describe('CancelationReportComponent', () => {
  let component: CancelationReportComponent;
  let fixture: ComponentFixture<CancelationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelationReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
