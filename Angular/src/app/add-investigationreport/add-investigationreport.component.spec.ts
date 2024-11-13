import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvestigationreportComponent } from './add-investigationreport.component';

describe('AddInvestigationreportComponent', () => {
  let component: AddInvestigationreportComponent;
  let fixture: ComponentFixture<AddInvestigationreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvestigationreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvestigationreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
