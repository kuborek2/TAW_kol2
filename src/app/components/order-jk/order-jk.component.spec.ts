import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderJKComponent } from './order-jk.component';

describe('OrderJKComponent', () => {
  let component: OrderJKComponent;
  let fixture: ComponentFixture<OrderJKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderJKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderJKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
