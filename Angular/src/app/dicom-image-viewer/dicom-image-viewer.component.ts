import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dicom-image-viewer',
  templateUrl: './dicom-image-viewer.component.html',
  styleUrls: ['./dicom-image-viewer.component.scss']
})
export class DicomImageViewerComponent implements OnInit {
  public snapshotImageName: string = 'sample_snapshot';
  public snapshotImageType: string = 'JPG';
  constructor() { }

  ngOnInit(): void {
  }

}
