import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateEditmasterComponent } from './generate-editmaster.component';

describe('GenerateEditmasterComponent', () => {
  let component: GenerateEditmasterComponent;
  let fixture: ComponentFixture<GenerateEditmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateEditmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateEditmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
