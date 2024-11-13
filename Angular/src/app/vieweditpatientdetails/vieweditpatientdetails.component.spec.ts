import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweditpatientdetailsComponent } from './vieweditpatientdetails.component';

describe('VieweditpatientdetailsComponent', () => {
  let component: VieweditpatientdetailsComponent;
  let fixture: ComponentFixture<VieweditpatientdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieweditpatientdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieweditpatientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
