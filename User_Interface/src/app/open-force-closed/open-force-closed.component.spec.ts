import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenForceClosedComponent } from './open-force-closed.component';

describe('OpenForceClosedComponent', () => {
  let component: OpenForceClosedComponent;
  let fixture: ComponentFixture<OpenForceClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenForceClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenForceClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
