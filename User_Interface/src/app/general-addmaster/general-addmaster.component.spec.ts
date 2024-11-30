import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAddmasterComponent } from './general-addmaster.component';

describe('GeneralAddmasterComponent', () => {
  let component: GeneralAddmasterComponent;
  let fixture: ComponentFixture<GeneralAddmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAddmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAddmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
