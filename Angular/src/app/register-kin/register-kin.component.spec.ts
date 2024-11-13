import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterKinComponent } from './register-kin.component';

describe('RegisterKinComponent', () => {
  let component: RegisterKinComponent;
  let fixture: ComponentFixture<RegisterKinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterKinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterKinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
