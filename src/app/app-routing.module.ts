import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeAdminSidebarComponent } from './home/home-admin-sidebar/home-admin-sidebar.component';
import { AppNavbarComponent } from './pages/app-navbar/app-navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { CadastrosModule } from './cadastros/cadastros.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [

  {
    path: 'admin/categoria',
    loadChildren: () => import('./cadastros/cadastros.module').then(m => m.CadastrosModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
