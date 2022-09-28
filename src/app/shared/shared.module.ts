import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
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
    AlertModalComponent,
    ConfirmModalComponent
  ],
  exports: [
    FormDebugComponent,
    AlertModalComponent

  ],
  entryComponents:[AlertModalComponent, ConfirmModalComponent],
  providers: [  ]
})
export class SharedModule { }
