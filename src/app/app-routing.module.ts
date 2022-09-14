import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { CadastrosModule } from './cadastros/cadastros.module';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

  {
    path: 'categoria',
    loadChildren: () => import('./cadastros/cadastros.module').then(m => m.CadastrosModule)
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
