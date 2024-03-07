import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarActividadesComponent } from './listar-actividades.component';
import { MenuModule } from '../menu/menu.module';
import { RouterLink, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    ListarActividadesComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterLink
  ]
})
export class ListarActividadesModule { }
