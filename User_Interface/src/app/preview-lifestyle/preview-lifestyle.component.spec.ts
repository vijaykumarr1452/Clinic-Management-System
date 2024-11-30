import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewLifestyleComponent } from './preview-lifestyle.component';

describe('PreviewLifestyleComponent', () => {
  let component: PreviewLifestyleComponent;
  let fixture: ComponentFixture<PreviewLifestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewLifestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewLifestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
