import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from './navbar/navbar.component';
import {RouterLink, RouterLinkActive} from '@angular/router';



@NgModule({
  declarations: [SidebarComponent, NavbarComponent],
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive
    ],
  exports: [SidebarComponent, NavbarComponent]
})
export class MenuModule { }
