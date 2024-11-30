import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicomImageViewerComponent } from './dicom-image-viewer.component';

describe('DicomImageViewerComponent', () => {
  let component: DicomImageViewerComponent;
  let fixture: ComponentFixture<DicomImageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicomImageViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicomImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
