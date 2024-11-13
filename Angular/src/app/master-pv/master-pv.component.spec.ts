import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPvComponent } from './master-pv.component';

describe('MasterPvComponent', () => {
  let component: MasterPvComponent;
  let fixture: ComponentFixture<MasterPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
