import { Component, OnInit } from '@angular/core';
import {JKDataServiceService} from "../../services/jk-data-service.service";
import {ParamMap} from "@angular/router";

@Component({
  selector: 'order-details-jk',
  templateUrl: './order-details-jk.component.html',
  styleUrls: ['./order-details-jk.component.css']
})
export class OrderDetailsJKComponent implements OnInit {

  public text: string = "";
  public image: string = "";

  constructor(private service: JKDataServiceService) { }
  // private params: ParamMap

  ngOnInit(): void {
  }

  // getId(){
  //   let id: any;
  //   id = this.params.get("id")
  //
  //   this.service.getById(id).subscribe((response: any) => {
  //     this.text = response["text"];
  //     this.image = response["image"];
  //   })
  // }

}
