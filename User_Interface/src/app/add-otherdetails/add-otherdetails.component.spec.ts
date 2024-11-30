import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherdetailsComponent } from './add-otherdetails.component';

describe('AddOtherdetailsComponent', () => {
  let component: AddOtherdetailsComponent;
  let fixture: ComponentFixture<AddOtherdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOtherdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOtherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
