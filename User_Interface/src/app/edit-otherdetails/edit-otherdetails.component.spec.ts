import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOtherdetailsComponent } from './edit-otherdetails.component';

describe('EditOtherdetailsComponent', () => {
  let component: EditOtherdetailsComponent;
  let fixture: ComponentFixture<EditOtherdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOtherdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOtherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
