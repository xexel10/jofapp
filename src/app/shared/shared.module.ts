import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    AlertModalComponent,
    ConfirmModalComponent
  ],
  exports: [
    FormDebugComponent,
    AlertModalComponent,
    CampoControlErroComponent,
    ErrorMsgComponent

  ],
  entryComponents:[AlertModalComponent, ConfirmModalComponent],
  providers: [  ]
})
export class SharedModule { }
