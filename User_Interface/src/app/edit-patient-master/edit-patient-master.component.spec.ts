import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatientMasterComponent } from './edit-patient-master.component';

describe('EditPatientMasterComponent', () => {
  let component: EditPatientMasterComponent;
  let fixture: ComponentFixture<EditPatientMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPatientMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPatientMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
