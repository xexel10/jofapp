


import { AuthGuard } from '../../guards/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoImoveisFormComponent } from './tipo-imoveis-form/tipo-imoveis-form.component';
import { TipoImoveisListaComponent } from './tipo-imoveis-lista/tipo-imoveis-lista.component';
import { TipoImovelResolverGuard } from './guards/tipo-imovel-resolver.guard';

/* Rotas hard code vem primeiro, como no exemple da rota novo. */
/*Poderiamos tb utilizar as rotas filhas caso necessário nesse routing, muito utilizado em telas mestre-detalhe */
const routes: Routes = [
  { path: '', component: TipoImoveisListaComponent },
  {
    path: 'novo',
    component: TipoImoveisFormComponent,
    resolve: {
      tipoImovel: TipoImovelResolverGuard
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'editar/:id',
    component: TipoImoveisFormComponent,
    resolve: {
      tipoImovel: TipoImovelResolverGuard
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoImovelRoutingModule {}
