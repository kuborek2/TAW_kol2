import { Component, OnInit } from '@angular/core';
import {JKDataServiceService} from "../../services/jk-data-service.service";

@Component({
  selector: 'order-jk',
  templateUrl: './order-jk.component.html',
  styleUrls: ['./order-jk.component.css']
})
export class OrderJKComponent implements OnInit {

  public item$: any;

  constructor(private service: JKDataServiceService) { }

  ngOnInit(): void {
    this.showAll()
  }

  showAll(){
    this.service.getAll().subscribe((response: any) => {
      this.item$ = response;
    });
  }

}
