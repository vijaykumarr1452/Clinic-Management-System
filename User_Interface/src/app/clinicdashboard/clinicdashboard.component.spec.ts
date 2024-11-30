import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicdashboardComponent } from './clinicdashboard.component';

describe('ClinicdashboardComponent', () => {
  let component: ClinicdashboardComponent;
  let fixture: ComponentFixture<ClinicdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
