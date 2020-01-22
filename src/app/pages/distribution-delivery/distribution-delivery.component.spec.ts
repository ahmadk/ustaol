import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionDeliveryComponent } from './distribution-delivery.component';

describe('DistributionDeliveryComponent', () => {
  let component: DistributionDeliveryComponent;
  let fixture: ComponentFixture<DistributionDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
