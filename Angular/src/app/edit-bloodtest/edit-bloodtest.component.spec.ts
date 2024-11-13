import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBloodtestComponent } from './edit-bloodtest.component';

describe('EditBloodtestComponent', () => {
  let component: EditBloodtestComponent;
  let fixture: ComponentFixture<EditBloodtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBloodtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBloodtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
