import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleftventricleComponent } from './addleftventricle.component';

describe('AddleftventricleComponent', () => {
  let component: AddleftventricleComponent;
  let fixture: ComponentFixture<AddleftventricleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddleftventricleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddleftventricleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
