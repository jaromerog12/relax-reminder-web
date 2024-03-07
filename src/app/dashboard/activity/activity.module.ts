import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateActivityComponent} from "./create-activity/create-activity.component";



@NgModule({
  declarations: [
    CreateActivityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateActivityComponent
  ]
})
export class ActivityModule { }
