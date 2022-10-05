<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 5674f7a (Cadastro de Tipo de Imovel Concluido)
=======
>>>>>>> 10ebb84 (Imoveis Lista Quase Ok)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { SharedModule } from './../../shared/shared.module';
import { CategoriaRoutingModule } from './categoria.routing.module';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';
import { CategoriasFormComponent } from './categorias-form/categorias-form.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { CategoriaService } from './categoria.service';

=======
>>>>>>> 5674f7a (Cadastro de Tipo de Imovel Concluido)
=======
import { CategoriaService } from './categoria.service';

>>>>>>> 10ebb84 (Imoveis Lista Quase Ok)


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
<<<<<<< HEAD
<<<<<<< HEAD
  ],
  providers: [CategoriaService],
=======
  ]
>>>>>>> 5674f7a (Cadastro de Tipo de Imovel Concluido)
=======
  ],
  providers: [CategoriaService],
>>>>>>> 10ebb84 (Imoveis Lista Quase Ok)
})
export class CategoriaModule { }
