import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallpatientsComponent } from './showallpatients.component';

describe('ShowallpatientsComponent', () => {
  let component: ShowallpatientsComponent;
  let fixture: ComponentFixture<ShowallpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
