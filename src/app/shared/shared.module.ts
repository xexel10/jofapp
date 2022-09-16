import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormDebugComponent,
  ],
  exports: [
    FormDebugComponent

  ],
  providers: [  ]
})
export class SharedModule { }
