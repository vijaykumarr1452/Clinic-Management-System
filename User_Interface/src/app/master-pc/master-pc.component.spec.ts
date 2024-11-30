import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPcComponent } from './master-pc.component';

describe('MasterPcComponent', () => {
  let component: MasterPcComponent;
  let fixture: ComponentFixture<MasterPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
