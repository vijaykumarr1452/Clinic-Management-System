import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmastertableComponent } from './editmastertable.component';

describe('EditmastertableComponent', () => {
  let component: EditmastertableComponent;
  let fixture: ComponentFixture<EditmastertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmastertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmastertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
