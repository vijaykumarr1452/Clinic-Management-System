import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceclosureComponent } from './forceclosure.component';

describe('ForceclosureComponent', () => {
  let component: ForceclosureComponent;
  let fixture: ComponentFixture<ForceclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
