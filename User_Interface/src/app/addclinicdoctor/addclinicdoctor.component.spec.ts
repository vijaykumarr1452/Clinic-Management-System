import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclinicdoctorComponent } from './addclinicdoctor.component';

describe('AddclinicdoctorComponent', () => {
  let component: AddclinicdoctorComponent;
  let fixture: ComponentFixture<AddclinicdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclinicdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclinicdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
