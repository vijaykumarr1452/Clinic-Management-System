import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowalldoctorsComponent } from './showalldoctors.component';

describe('ShowalldoctorsComponent', () => {
  let component: ShowalldoctorsComponent;
  let fixture: ComponentFixture<ShowalldoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowalldoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowalldoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
