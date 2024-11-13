import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAorticValveComponent } from './master-aortic-valve.component';

describe('MasterAorticValveComponent', () => {
  let component: MasterAorticValveComponent;
  let fixture: ComponentFixture<MasterAorticValveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAorticValveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAorticValveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
