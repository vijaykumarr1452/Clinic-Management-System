import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewBloodtestComponent } from './preview-bloodtest.component';

describe('PreviewBloodtestComponent', () => {
  let component: PreviewBloodtestComponent;
  let fixture: ComponentFixture<PreviewBloodtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewBloodtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewBloodtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
