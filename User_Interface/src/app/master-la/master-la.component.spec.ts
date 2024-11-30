import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLaComponent } from './master-la.component';

describe('MasterLaComponent', () => {
  let component: MasterLaComponent;
  let fixture: ComponentFixture<MasterLaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterLaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterLaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
