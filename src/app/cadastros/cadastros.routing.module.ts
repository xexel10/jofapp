
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { CategoriasListaComponent } from './categorias/categorias-lista/categorias-lista.component';
import { CategoriaResolverGuard } from './categorias/guards/categoria-resolver.guard';

/* Rotas hard code vem primeiro, como no exemple da rota novo. */
/*Poderiamos tb utilizar as rotas filhas caso necessário nesse routing, muito utilizado em telas mestre-detalhe */
const routes: Routes = [
  { path: '', component: CategoriasListaComponent },
  {
    path: 'admin/categoria/novo',
    component: CategoriasFormComponent,
    resolve: {
      categoria: CategoriaResolverGuard
    }
  },
  {
    path: 'admin/categoria/editar/:id',
    component: CategoriasFormComponent,
    resolve: {
      categoria: CategoriaResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule {}
