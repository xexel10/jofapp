import { CategoriaComponent } from './categoria/categoria.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const cadastroRoutes: Routes = [
  {path: 'cadastro/categoria', component: CategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cadastroRoutes)],
  exports: [RouterModule]
})

export class CadastroRoutingModule { }
