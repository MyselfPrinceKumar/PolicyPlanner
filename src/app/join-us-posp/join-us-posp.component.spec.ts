import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsPospComponent } from './join-us-posp.component';

describe('JoinUsPospComponent', () => {
  let component: JoinUsPospComponent;
  let fixture: ComponentFixture<JoinUsPospComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinUsPospComponent]
    });
    fixture = TestBed.createComponent(JoinUsPospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
