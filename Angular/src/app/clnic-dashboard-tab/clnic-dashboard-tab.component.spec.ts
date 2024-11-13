import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClnicDashboardTabComponent } from './clnic-dashboard-tab.component';

describe('ClnicDashboardTabComponent', () => {
  let component: ClnicDashboardTabComponent;
  let fixture: ComponentFixture<ClnicDashboardTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClnicDashboardTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClnicDashboardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
