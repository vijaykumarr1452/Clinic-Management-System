import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsOpinionComponent } from './experts-opinion.component';

describe('ExpertsOpinionComponent', () => {
  let component: ExpertsOpinionComponent;
  let fixture: ComponentFixture<ExpertsOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
