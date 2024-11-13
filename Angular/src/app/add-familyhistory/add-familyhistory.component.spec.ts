import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamilyhistoryComponent } from './add-familyhistory.component';

describe('AddFamilyhistoryComponent', () => {
  let component: AddFamilyhistoryComponent;
  let fixture: ComponentFixture<AddFamilyhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFamilyhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFamilyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
