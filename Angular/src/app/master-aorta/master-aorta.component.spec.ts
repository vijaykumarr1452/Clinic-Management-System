import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAortaComponent } from './master-aorta.component';

describe('MasterAortaComponent', () => {
  let component: MasterAortaComponent;
  let fixture: ComponentFixture<MasterAortaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAortaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAortaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
