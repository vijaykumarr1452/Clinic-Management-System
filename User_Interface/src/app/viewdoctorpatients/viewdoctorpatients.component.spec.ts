import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdoctorpatientsComponent } from './viewdoctorpatients.component';

describe('ViewdoctorpatientsComponent', () => {
  let component: ViewdoctorpatientsComponent;
  let fixture: ComponentFixture<ViewdoctorpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdoctorpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdoctorpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
