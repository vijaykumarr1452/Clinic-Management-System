import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewRegPatientComponent } from './preview-reg-patient.component';

describe('PreviewRegPatientComponent', () => {
  let component: PreviewRegPatientComponent;
  let fixture: ComponentFixture<PreviewRegPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewRegPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewRegPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
