import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralClinicpreviewallComponent } from './general-clinicpreviewall.component';

describe('GeneralClinicpreviewallComponent', () => {
  let component: GeneralClinicpreviewallComponent;
  let fixture: ComponentFixture<GeneralClinicpreviewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralClinicpreviewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralClinicpreviewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
