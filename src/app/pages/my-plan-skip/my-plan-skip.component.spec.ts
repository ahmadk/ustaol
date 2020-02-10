import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlanSkipComponent } from './my-plan-skip.component';

describe('MyPlanSkipComponent', () => {
  let component: MyPlanSkipComponent;
  let fixture: ComponentFixture<MyPlanSkipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlanSkipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlanSkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
