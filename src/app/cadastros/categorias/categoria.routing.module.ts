import { AuthGuard } from '../../guards/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasFormComponent } from './categorias-form/categorias-form.component';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';
import { CategoriaResolverGuard } from './guards/categoria-resolver.guard';

/* Rotas hard code vem primeiro, como no exemple da rota novo. */
/*Poderiamos tb utilizar as rotas filhas caso necessário nesse routing, muito utilizado em telas mestre-detalhe */
const routes: Routes = [
  { path: '', component: CategoriasListaComponent },
  {
    path: 'novo',
    component: CategoriasFormComponent,
    resolve: {
      categoria: CategoriaResolverGuard
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'editar/:id',
    component: CategoriasFormComponent,
    resolve: {
      categoria: CategoriaResolverGuard
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule {}
