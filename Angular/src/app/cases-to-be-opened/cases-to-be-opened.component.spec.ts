import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesToBeOpenedComponent } from './cases-to-be-opened.component';

describe('CasesToBeOpenedComponent', () => {
  let component: CasesToBeOpenedComponent;
  let fixture: ComponentFixture<CasesToBeOpenedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesToBeOpenedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesToBeOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
