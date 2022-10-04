

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { SharedModule } from './../../shared/shared.module';
import { TipoImovelRoutingModule } from './tipo-imovel.routing.module';
import { TipoImoveisListaComponent } from './tipo-imoveis-lista/tipo-imoveis-lista.component';
import { TipoImoveisFormComponent } from './tipo-imoveis-form/tipo-imoveis-form.component';


@NgModule({
  declarations: [
    TipoImoveisFormComponent,
    TipoImoveisListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    TipoImovelRoutingModule
  ]
})
export class TipoImovelModule { }
