import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlanManagementComponent } from './my-plan-management.component';

describe('MyPlanManagementComponent', () => {
  let component: MyPlanManagementComponent;
  let fixture: ComponentFixture<MyPlanManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlanManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlanManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
