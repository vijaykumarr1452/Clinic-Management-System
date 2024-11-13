import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMvComponent } from './master-mv.component';

describe('MasterMvComponent', () => {
  let component: MasterMvComponent;
  let fixture: ComponentFixture<MasterMvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterMvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
