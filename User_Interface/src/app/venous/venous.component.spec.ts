import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenousComponent } from './venous.component';

describe('VenousComponent', () => {
  let component: VenousComponent;
  let fixture: ComponentFixture<VenousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
