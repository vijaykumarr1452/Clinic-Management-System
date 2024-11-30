import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRvComponent } from './master-rv.component';

describe('MasterRvComponent', () => {
  let component: MasterRvComponent;
  let fixture: ComponentFixture<MasterRvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
