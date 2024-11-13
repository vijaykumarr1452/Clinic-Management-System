import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEditdoctorComponent } from './general-editdoctor.component';

describe('GeneralEditdoctorComponent', () => {
  let component: GeneralEditdoctorComponent;
  let fixture: ComponentFixture<GeneralEditdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralEditdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralEditdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
