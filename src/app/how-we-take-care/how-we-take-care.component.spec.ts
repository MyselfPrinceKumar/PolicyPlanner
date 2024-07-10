import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeTakeCareComponent } from './how-we-take-care.component';

describe('HowWeTakeCareComponent', () => {
  let component: HowWeTakeCareComponent;
  let fixture: ComponentFixture<HowWeTakeCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowWeTakeCareComponent]
    });
    fixture = TestBed.createComponent(HowWeTakeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
