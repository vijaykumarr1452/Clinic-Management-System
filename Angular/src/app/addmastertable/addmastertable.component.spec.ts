import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmastertableComponent } from './addmastertable.component';

describe('AddmastertableComponent', () => {
  let component: AddmastertableComponent;
  let fixture: ComponentFixture<AddmastertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmastertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmastertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
