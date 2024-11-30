import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicomuploadComponent } from './dicomupload.component';

describe('DicomuploadComponent', () => {
  let component: DicomuploadComponent;
  let fixture: ComponentFixture<DicomuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicomuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicomuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
