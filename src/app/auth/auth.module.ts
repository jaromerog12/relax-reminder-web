import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
