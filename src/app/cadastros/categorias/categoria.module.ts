import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { SharedModule } from './../../shared/shared.module';
import { CategoriaRoutingModule } from './categoria.routing.module';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';
import { CategoriasFormComponent } from './categorias-form/categorias-form.component';
import { CategoriaService } from './categoria.service';



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
    CategoriaRoutingModule
  ],
  providers: [CategoriaService],
})
export class CategoriaModule { }
