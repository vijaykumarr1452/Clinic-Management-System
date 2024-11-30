import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewallFamilyhistoryComponent } from './previewall-familyhistory.component';

describe('PreviewallFamilyhistoryComponent', () => {
  let component: PreviewallFamilyhistoryComponent;
  let fixture: ComponentFixture<PreviewallFamilyhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewallFamilyhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewallFamilyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
