import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvestigationreportComponent } from './edit-investigationreport.component';

describe('EditInvestigationreportComponent', () => {
  let component: EditInvestigationreportComponent;
  let fixture: ComponentFixture<EditInvestigationreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInvestigationreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInvestigationreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
