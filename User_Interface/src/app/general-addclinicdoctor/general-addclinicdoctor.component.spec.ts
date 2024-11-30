import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAddclinicdoctorComponent } from './general-addclinicdoctor.component';

describe('GeneralAddclinicdoctorComponent', () => {
  let component: GeneralAddclinicdoctorComponent;
  let fixture: ComponentFixture<GeneralAddclinicdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAddclinicdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAddclinicdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
