import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CategoriaComponent } from './categoria/categoria.component';
import { CadastroRoutingModule } from './cadastro.routing.module';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CadastroRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CadastroModule { }
