import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesToBeClosedComponent } from './cases-to-be-closed.component';

describe('CasesToBeClosedComponent', () => {
  let component: CasesToBeClosedComponent;
  let fixture: ComponentFixture<CasesToBeClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesToBeClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesToBeClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
