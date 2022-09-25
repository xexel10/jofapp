import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CadastrosRoutingModule } from './cadastros.routing.module';
import { SharedModule } from './../shared/shared.module';

import { CategoriasListaComponent } from './categorias/categorias-lista/categorias-lista.component';
import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';


@NgModule({
  declarations: [
    CategoriasFormComponent,
    CategoriasListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    CadastrosRoutingModule
  ]
})
export class CadastrosModule { }
