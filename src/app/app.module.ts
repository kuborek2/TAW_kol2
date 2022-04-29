import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {JKDataServiceService} from "./services/jk-data-service.service";
import { OrderJKComponent } from './components/order-jk/order-jk.component';
import { OrderItemJKComponent } from './components/order-item-jk/order-item-jk.component';
import { OrderDetailsJKComponent } from './components/order-details-jk/order-details-jk.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderJKComponent,
    OrderItemJKComponent,
    OrderDetailsJKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    JKDataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
