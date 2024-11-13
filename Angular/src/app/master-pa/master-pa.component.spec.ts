import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPaComponent } from './master-pa.component';

describe('MasterPaComponent', () => {
  let component: MasterPaComponent;
  let fixture: ComponentFixture<MasterPaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
