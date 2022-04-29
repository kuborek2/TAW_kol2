import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderJKComponent} from "./components/order-jk/order-jk.component";
import {OrderDetailsJKComponent} from "./components/order-details-jk/order-details-jk.component";

const routes: Routes = [
  {
    path: "",
    component: OrderJKComponent
  },
  // {
  //   path: "/api/posts/:id",
  //   component: OrderDetailsJKComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
