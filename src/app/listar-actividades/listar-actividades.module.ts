import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarActividadesComponent } from './listar-actividades.component';
import { MenuModule } from '../menu/menu.module';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    ListarActividadesComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterOutlet
  ]
})
export class ListarActividadesModule { }
