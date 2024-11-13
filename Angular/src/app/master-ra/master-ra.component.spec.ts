import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRaComponent } from './master-ra.component';

describe('MasterRaComponent', () => {
  let component: MasterRaComponent;
  let fixture: ComponentFixture<MasterRaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
