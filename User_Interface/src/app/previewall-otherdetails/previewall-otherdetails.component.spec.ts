import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewallOtherdetailsComponent } from './previewall-otherdetails.component';

describe('PreviewallOtherdetailsComponent', () => {
  let component: PreviewallOtherdetailsComponent;
  let fixture: ComponentFixture<PreviewallOtherdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewallOtherdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewallOtherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
