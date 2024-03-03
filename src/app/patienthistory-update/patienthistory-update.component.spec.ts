import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienthistoryUpdateComponent } from './patienthistory-update.component';

describe('PatienthistoryUpdateComponent', () => {
  let component: PatienthistoryUpdateComponent;
  let fixture: ComponentFixture<PatienthistoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatienthistoryUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatienthistoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
