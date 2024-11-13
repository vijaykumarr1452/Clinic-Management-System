import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMedicineComponent } from './preview-medicine.component';

describe('PreviewMedicineComponent', () => {
  let component: PreviewMedicineComponent;
  let fixture: ComponentFixture<PreviewMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
