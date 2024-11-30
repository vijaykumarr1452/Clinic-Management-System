import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLifestyleComponent } from './edit-lifestyle.component';

describe('EditLifestyleComponent', () => {
  let component: EditLifestyleComponent;
  let fixture: ComponentFixture<EditLifestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLifestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLifestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
