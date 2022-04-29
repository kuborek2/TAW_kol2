import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemJKComponent } from './order-item-jk.component';

describe('OrderItemJKComponent', () => {
  let component: OrderItemJKComponent;
  let fixture: ComponentFixture<OrderItemJKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderItemJKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemJKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
