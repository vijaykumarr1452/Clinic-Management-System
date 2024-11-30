import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewObservationsComponent } from './preview-observations.component';

describe('PreviewObservationsComponent', () => {
  let component: PreviewObservationsComponent;
  let fixture: ComponentFixture<PreviewObservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
