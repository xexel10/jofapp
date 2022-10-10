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
<<<<<<< HEAD
import { AdminComponent } from './pages/admin/admin.component';
import { ImovelModule } from './cadastros/imoveis/imovel.module';

=======
import { ImovelModule } from './cadastros/imoveis/imovel.module';
import { AdminComponent } from './pages/admin/admin.component';
>>>>>>> 6bd5cfbe6f25c9d47cd17f7a600d612290b5c93b

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AppNavbarComponent,
    HomeComponent,
    HomeAdminSidebarComponent,
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
    SharedModule,
    ImovelModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}
