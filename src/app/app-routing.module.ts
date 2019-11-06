import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolicitarRevisaoComponent } from './solicitar-revisao/solicitar-revisao.component';
import { AcompanharComponent } from './acompanhar/acompanhar.component';
import { Agenda2030Component } from './agenda2030/agenda2030.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'solicitar-revisao',
    component: SolicitarRevisaoComponent
  },
  {
    path: 'acompanhar',
    component: AcompanharComponent
  },
  {
    path: 'agenda2030',
    component: Agenda2030Component
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
