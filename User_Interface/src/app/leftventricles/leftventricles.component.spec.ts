import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftventriclesComponent } from './leftventricles.component';

describe('LeftventriclesComponent', () => {
  let component: LeftventriclesComponent;
  let fixture: ComponentFixture<LeftventriclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftventriclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftventriclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
