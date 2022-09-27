
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { CategoriasListaComponent } from './categorias/categorias-lista/categorias-lista.component';
import { CategoriaResolverGuard } from './categorias/guards/categoria-resolver.guard';

/*
const routes: Routes = [
  {path: '', component: CategoriasListaComponent},
  {path: 'novo', component: CategoriasFormComponent},
  {path: 'editar/:id', component: CategoriasFormComponent}
];*/

const routes: Routes = [
  { path: '', component: CategoriasListaComponent },
  {
    path: 'novo',
    component: CategoriasFormComponent,
    resolve: {
      categoria: CategoriaResolverGuard
    }
  },
  {
    path: 'editar/:id',
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
