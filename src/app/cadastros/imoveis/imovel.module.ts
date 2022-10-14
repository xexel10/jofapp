import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { SharedModule } from '../../shared/shared.module';
import { ImovelRoutingModule } from './imovel.routing.module';
import { ImoveisListaComponent } from './imoveis-lista/imoveis-lista.component';
import { ImoveisFormComponent } from './imoveis-form/imoveis-form.component';
import { ImovelService } from './imovel.service';


@NgModule({
  declarations: [
    ImoveisFormComponent,
    ImoveisListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    ImovelRoutingModule
  ],
  providers: [ImovelService],
})
export class ImovelModule { }
