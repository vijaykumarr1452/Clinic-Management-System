import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementoryReportComponent } from './supplementory-report.component';

describe('SupplementoryReportComponent', () => {
  let component: SupplementoryReportComponent;
  let fixture: ComponentFixture<SupplementoryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementoryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
