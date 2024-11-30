import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallclinicsComponent } from './showallclinics.component';

describe('ShowallclinicsComponent', () => {
  let component: ShowallclinicsComponent;
  let fixture: ComponentFixture<ShowallclinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallclinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
