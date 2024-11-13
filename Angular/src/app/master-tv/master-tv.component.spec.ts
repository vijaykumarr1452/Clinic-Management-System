import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTvComponent } from './master-tv.component';

describe('MasterTvComponent', () => {
  let component: MasterTvComponent;
  let fixture: ComponentFixture<MasterTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
