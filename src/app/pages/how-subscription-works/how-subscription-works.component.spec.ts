import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowSubscriptionWorksComponent } from './how-subscription-works.component';

describe('HowSubscriptionWorksComponent', () => {
  let component: HowSubscriptionWorksComponent;
  let fixture: ComponentFixture<HowSubscriptionWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowSubscriptionWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowSubscriptionWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
