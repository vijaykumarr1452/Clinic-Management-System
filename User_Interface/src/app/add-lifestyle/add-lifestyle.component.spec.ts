import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLifestyleComponent } from './add-lifestyle.component';

describe('AddLifestyleComponent', () => {
  let component: AddLifestyleComponent;
  let fixture: ComponentFixture<AddLifestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLifestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLifestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
