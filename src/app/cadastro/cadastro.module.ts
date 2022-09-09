
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaComponent } from './categoria/categoria.component';
import { CadastroRoutingModule } from './cadastro.routing.module';


@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
