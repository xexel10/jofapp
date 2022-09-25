
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { CategoriasListaComponent } from './categorias/categorias-lista/categorias-lista.component';

const routes: Routes = [
  {path: '', component: CategoriasListaComponent},
  {path: 'novo',component: CategoriasFormComponent},
  {path: 'editar/:id', component: CategoriasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule {}
