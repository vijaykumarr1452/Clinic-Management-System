import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePreviewallmasterComponent } from './generate-previewallmaster.component';

describe('GeneratePreviewallmasterComponent', () => {
  let component: GeneratePreviewallmasterComponent;
  let fixture: ComponentFixture<GeneratePreviewallmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePreviewallmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePreviewallmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
