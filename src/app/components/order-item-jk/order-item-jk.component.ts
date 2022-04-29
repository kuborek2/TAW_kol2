import {Component, Input, OnInit} from '@angular/core';
import {ParamMap, RouterModule} from "@angular/router";

@Component({
  selector: 'order-item-jk',
  templateUrl: './order-item-jk.component.html',
  styleUrls: ['./order-item-jk.component.css']
})
export class OrderItemJKComponent implements OnInit {

  @Input() text?: string;
  @Input() image?: string;

  constructor() { }

  ngOnInit(): void {

  }

}
