import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLvComponent } from './master-lv.component';

describe('MasterLvComponent', () => {
  let component: MasterLvComponent;
  let fixture: ComponentFixture<MasterLvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterLvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
