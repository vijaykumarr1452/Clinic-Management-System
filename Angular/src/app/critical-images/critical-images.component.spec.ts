import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalImagesComponent } from './critical-images.component';

describe('CriticalImagesComponent', () => {
  let component: CriticalImagesComponent;
  let fixture: ComponentFixture<CriticalImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
