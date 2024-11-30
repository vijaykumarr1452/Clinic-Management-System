import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEditclinicComponent } from './general-editclinic.component';

describe('GeneralEditclinicComponent', () => {
  let component: GeneralEditclinicComponent;
  let fixture: ComponentFixture<GeneralEditclinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralEditclinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralEditclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
