import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDoctorpreviewallComponent } from './general-doctorpreviewall.component';

describe('GeneralDoctorpreviewallComponent', () => {
  let component: GeneralDoctorpreviewallComponent;
  let fixture: ComponentFixture<GeneralDoctorpreviewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralDoctorpreviewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDoctorpreviewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
