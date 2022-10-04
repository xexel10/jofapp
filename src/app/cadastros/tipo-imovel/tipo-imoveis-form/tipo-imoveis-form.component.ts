import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { TipoImovelService } from '../tipo-imovel.service';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './tipo-imoveis-form.component.html',
  styleUrls: ['./tipo-imoveis-form.component.css']
})

export class TipoImoveisFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  basePath = '/admin/tipo-imovel';


  constructor(
    private fb: FormBuilder,
    private service: TipoImovelService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const tipoImovel = this.route.snapshot.data['tipoImovel'];

    this.form = this.fb.group({
      id: [tipoImovel.id],
      nome: [tipoImovel.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      status: [tipoImovel.status]
    });

  }

  onSubmit() {

    this.submitted = true;

    if (this.form.valid) {

      let msgSuccess = 'Tipo Imóvel criada com sucesso!';
      let msgError = 'Erro ao criar tipo de imóvel, tente novamente!';
      if (this.form.value.id) {
        msgSuccess = 'Tipo de Imóvel atualizada com sucesso!';
        msgError = 'Erro ao atualizar categoria, tente novamente!';
      }

      this.service.save(this.form.value).subscribe({
        next: (v) => console.log(v),
        error: (e) => this.modal.showAlertDanger(msgError),
        complete: () => {
          this.modal.showAlertSuccess(msgSuccess);
          this.location.back();
        }
      });

    }else{
      this.verificaValidacoesForm(this.form);
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset;
    this.location.back();
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }


  resetar() {
    this.form.reset();
  }

  verificaValidTouched(campo) {
    return  !this.form.controls[campo].valid && (this.form.controls[campo].touched || this.form.controls[campo].dirty)
  }

  verificaRequired(campo) {
    return this.form.controls[campo].hasError('required') && (this.form.controls[campo].touched || this.form.controls[campo].dirty)
   }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      controle?.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

}
