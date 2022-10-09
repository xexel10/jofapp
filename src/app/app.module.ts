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
<<<<<<< HEAD
<<<<<<< HEAD
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
=======
import { ImoveisComponent } from './cadastros/imoveis/imoveis.component';
import { ImoveisListaComponent } from './cadastros/imoveis/imoveis-lista/imoveis-lista.component';
import { ImoveisFormComponent } from './cadastros/imoveis/imoveis-form/imoveis-form.component';
>>>>>>> 61d8137 (Criado Componente de Cadastro de Imoveis)
=======
import { ImovelModule } from './cadastros/imoveis/imovel.module';

>>>>>>> a7d77e1 (Imoveis Lista Quase Ok)
=======
import { ImovelModule } from './cadastros/imoveis/imovel.module';

>>>>>>> 5f7a0183a5475a3233723783d98f089f8df8413e


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AppNavbarComponent,
    HomeComponent,
    HomeAdminSidebarComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    AdminComponent,
    PaginaNaoEncontradaComponent
=======
    PaginaNaoEncontradaComponent,
<<<<<<< HEAD
    AdminComponent,
    ImoveisComponent,
    ImoveisListaComponent,
    ImoveisFormComponent
>>>>>>> 61d8137 (Criado Componente de Cadastro de Imoveis)
=======
=======
    PaginaNaoEncontradaComponent,
>>>>>>> 5f7a0183a5475a3233723783d98f089f8df8413e
    AdminComponent
>>>>>>> a7d77e1 (Imoveis Lista Quase Ok)
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    CategoriaModule,
    SharedModule,
    ImovelModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}

/* Package.jon para cors */
/*--proxy-config proxy.conf.js*/
