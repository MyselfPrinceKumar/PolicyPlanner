import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverTheBestComponent } from './discover-the-best.component';

describe('DiscoverTheBestComponent', () => {
  let component: DiscoverTheBestComponent;
  let fixture: ComponentFixture<DiscoverTheBestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoverTheBestComponent]
    });
    fixture = TestBed.createComponent(DiscoverTheBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
