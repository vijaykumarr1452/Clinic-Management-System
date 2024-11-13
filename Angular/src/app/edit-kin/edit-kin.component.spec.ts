import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKinComponent } from './edit-kin.component';

describe('EditKinComponent', () => {
  let component: EditKinComponent;
  let fixture: ComponentFixture<EditKinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
