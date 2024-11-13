import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LvmotionComponent } from './lvmotion.component';

describe('LvmotionComponent', () => {
  let component: LvmotionComponent;
  let fixture: ComponentFixture<LvmotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LvmotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
