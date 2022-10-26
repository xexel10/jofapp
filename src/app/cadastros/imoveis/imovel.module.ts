import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';


import { SharedModule } from '../../shared/shared.module';
import { ImovelRoutingModule } from './imovel.routing.module';
import { ImoveisListaComponent } from './imoveis-lista/imoveis-lista.component';
import { ImoveisFormComponent } from './imoveis-form/imoveis-form.component';
import { ImovelService } from './imovel.service';
import { DragDirective } from './imoveis-form/drag-directive.directive';


@NgModule({
  declarations: [
    ImoveisFormComponent,
    ImoveisListaComponent,
    DragDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    ImovelRoutingModule,
    MatGridListModule
    
  ],
  providers: [ImovelService],
})
export class ImovelModule { }
