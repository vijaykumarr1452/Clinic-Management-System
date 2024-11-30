import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFamilyhistoryComponent } from './edit-familyhistory.component';

describe('EditFamilyhistoryComponent', () => {
  let component: EditFamilyhistoryComponent;
  let fixture: ComponentFixture<EditFamilyhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFamilyhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFamilyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
