import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateActivityComponent } from "./create-activity/create-activity.component";
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { ListarActividadesComponent } from './listar-actividad/listar-actividades.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreateActivityComponent,
    EditActivityComponent,
    ListarActividadesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CreateActivityComponent,
    EditActivityComponent,
    ListarActividadesComponent
  ]
})
export class ActivityModule { }
