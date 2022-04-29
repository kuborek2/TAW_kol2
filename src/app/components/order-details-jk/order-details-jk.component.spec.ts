import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsJKComponent } from './order-details-jk.component';

describe('OrderDetailsJKComponent', () => {
  let component: OrderDetailsJKComponent;
  let fixture: ComponentFixture<OrderDetailsJKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsJKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsJKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
