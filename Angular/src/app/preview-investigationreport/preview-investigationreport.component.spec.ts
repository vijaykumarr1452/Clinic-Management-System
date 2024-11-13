import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewInvestigationreportComponent } from './preview-investigationreport.component';

describe('PreviewInvestigationreportComponent', () => {
  let component: PreviewInvestigationreportComponent;
  let fixture: ComponentFixture<PreviewInvestigationreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewInvestigationreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewInvestigationreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
