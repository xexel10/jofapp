
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeAdminSidebarComponent } from './home/home-admin-sidebar/home-admin-sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [

  {
    path: 'admin/categoria',
    loadChildren: () => import('./cadastros/categorias/categoria.module').then(m => m.CategoriaModule)
  },
  {
    path: 'admin/tipo-imovel',
    loadChildren: () => import('./cadastros/tipo-imovel/tipo-imovel.module').then(m => m.TipoImovelModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: HomeAdminSidebarComponent, canActivate: [AuthGuard] },
<<<<<<< HEAD
  { path: '', component: HomeComponent },
  { path: '**', component: PaginaNaoEncontradaComponent }
=======
  { path: '', component: HomeComponent }
  //{ path: '**', component: PaginaNaoEncontradaComponent }


>>>>>>> 997b48f (Cadastro de Tipo de Imovel Concluido)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
