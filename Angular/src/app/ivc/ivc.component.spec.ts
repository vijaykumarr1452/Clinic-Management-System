import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvcComponent } from './ivc.component';

describe('IvcComponent', () => {
  let component: IvcComponent;
  let fixture: ComponentFixture<IvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
