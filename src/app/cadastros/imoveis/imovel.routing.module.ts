import { AuthGuard } from '../../guards/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImoveisFormComponent } from './imoveis-form/imoveis-form.component';
import { ImoveisListaComponent } from './imoveis-lista/imoveis-lista.component';
import { ImovelResolverGuard } from './guards/imovel-resolver.guard';

/* Rotas hard code vem primeiro, como no exemple da rota novo. */
/*Poderiamos tb utilizar as rotas filhas caso necessário nesse routing, muito utilizado em telas mestre-detalhe */
const routes: Routes = [
  { path: '', component: ImoveisListaComponent },
  {
    path: 'novo',
    component: ImoveisFormComponent,
    resolve: {
      imovel: ImovelResolverGuard
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'editar/:id',
    component: ImoveisFormComponent,
    resolve: {
      imovel: ImovelResolverGuard
    },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImovelRoutingModule {}
