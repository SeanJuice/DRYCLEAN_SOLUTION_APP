import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCashUpComponent } from './daily-cash-up.component';

describe('DailyCashUpComponent', () => {
  let component: DailyCashUpComponent;
  let fixture: ComponentFixture<DailyCashUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCashUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCashUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
