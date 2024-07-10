import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpartnerscardsComponent } from './ourpartnerscards.component';

describe('OurpartnerscardsComponent', () => {
  let component: OurpartnerscardsComponent;
  let fixture: ComponentFixture<OurpartnerscardsComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurpartnerscardsComponent]
    });
    fixture = TestBed.createComponent(OurpartnerscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
