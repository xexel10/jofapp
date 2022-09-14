import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const loginRoutes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
