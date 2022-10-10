import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    loadChildren: () => import('./cadastros/imoveis/imovel.module').then(m => m.ImovelModule)
  },
  {
    path: 'admin/imovel',
    loadChildren: () => import('./cadastros/tipo-imovel/tipo-imovel.module').then(m => m.TipoImovelModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: HomeAdminSidebarComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
