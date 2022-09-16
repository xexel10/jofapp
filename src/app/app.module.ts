import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CadastroModule } from './cadastro/cadastro.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    CadastroModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}
