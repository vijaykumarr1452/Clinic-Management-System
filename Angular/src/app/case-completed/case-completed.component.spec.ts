import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCompletedComponent } from './case-completed.component';

describe('CaseCompletedComponent', () => {
  let component: CaseCompletedComponent;
  let fixture: ComponentFixture<CaseCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
