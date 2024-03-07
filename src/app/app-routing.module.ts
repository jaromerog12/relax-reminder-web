import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { HomeComponent } from "./dashboard/home/home.component";
import { ListarActividadesComponent } from './dashboard/activity/listar-actividad/listar-actividades.component';
import { CreateActivityComponent } from "./dashboard/activity/create-activity/create-activity.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'lista-actividades', component: ListarActividadesComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '/home' },
      { path: 'activity/create', component: CreateActivityComponent },
      { path: '**', redirectTo: 'home' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
