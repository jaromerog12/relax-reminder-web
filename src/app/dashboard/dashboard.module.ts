import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterOutlet } from "@angular/router";
import { MenuModule } from "../menu/menu.module";

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterOutlet
  ],
  exports: [
    HomeComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
