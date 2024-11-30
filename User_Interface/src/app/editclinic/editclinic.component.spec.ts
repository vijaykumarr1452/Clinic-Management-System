import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclinicComponent } from './editclinic.component';

describe('EditclinicComponent', () => {
  let component: EditclinicComponent;
  let fixture: ComponentFixture<EditclinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditclinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
