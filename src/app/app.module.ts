
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AppNavbarComponent } from './pages/app-navbar/app-navbar.component';
import { CategoriaModule } from './cadastros/categorias/categoria.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeAdminSidebarComponent } from './home/home-admin-sidebar/home-admin-sidebar.component';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AdminComponent } from './pages/admin/admin.component';
<<<<<<< HEAD
import { ImovelModule } from './cadastros/imoveis/imovel.module';

=======
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
>>>>>>> 88a2507 (pagina-nao-encontrada-ok)


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AppNavbarComponent,
    HomeComponent,
    HomeAdminSidebarComponent,
    PaginaNaoEncontradaComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    CategoriaModule,
<<<<<<< HEAD
    SharedModule,
    ImovelModule
=======
    SharedModule
>>>>>>> 5674f7a (Cadastro de Tipo de Imovel Concluido)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}

/* Package.jon para cors */
/*--proxy-config proxy.conf.js*/
