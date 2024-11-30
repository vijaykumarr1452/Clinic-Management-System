import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineformComponent } from './medicineform.component';

describe('MedicineformComponent', () => {
  let component: MedicineformComponent;
  let fixture: ComponentFixture<MedicineformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
