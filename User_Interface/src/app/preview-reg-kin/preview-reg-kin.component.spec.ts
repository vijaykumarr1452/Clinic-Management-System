import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewRegKinComponent } from './preview-reg-kin.component';

describe('PreviewRegKinComponent', () => {
  let component: PreviewRegKinComponent;
  let fixture: ComponentFixture<PreviewRegKinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewRegKinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewRegKinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
