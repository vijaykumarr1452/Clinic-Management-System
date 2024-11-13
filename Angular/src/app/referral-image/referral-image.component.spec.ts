import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralImageComponent } from './referral-image.component';

describe('ReferralImageComponent', () => {
  let component: ReferralImageComponent;
  let fixture: ComponentFixture<ReferralImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
