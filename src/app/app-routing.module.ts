import { CadastrosModule } from './cadastros/cadastros.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'categoria',
    loadChildren: () => import('./cadastros/cadastros.module').then(m => m.CadastrosModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'busca-reativa'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
