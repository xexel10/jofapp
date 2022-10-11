import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ImovelService } from './../imovel.service';
import { Subscription, Observable } from 'rxjs';

import { TipoImovel } from './../../../models/tipo-imovel';
import { Imovel } from './../../../models/imovel';
import { TipoImovelService } from './../../tipo-imovel/tipo-imovel.service';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from './../../categorias/categoria.service';

@Component({
  selector: 'app-imoveis-form',
  templateUrl: './imoveis-form.component.html',
  styleUrls: ['./imoveis-form.component.css']
})
export class ImoveisFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  basePath = '/admin/imovel';

  imovel!: Imovel;
  // tipoImovel!: TipoImovel[];
  inscricao!: Subscription;
  tipoImovel!: Observable<TipoImovel[]>;
  categoria!:Observable<Categoria>;


  constructor(
    private fb: FormBuilder,
    private service: ImovelService,
    private tipoImovelService: TipoImovelService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.inscricao = this.route.data.subscribe(
      (data) => {
        this.imovel = data['imovel'];
      }
    );

    this.tipoImovel = this.tipoImovelService.list();
    //this.categoria = this.CategoriaService.list();

    // this.tipoImovelService.list().subscribe(dados =>{
    //   this.tipoImovel = dados;
    // });

   this.form = this.fb.group({
      id: [this.imovel.id],
      nome: [this.imovel.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      descricao: [this.imovel.nome],
      tipoImovel: [this.imovel.nome],
      categoria: [this.imovel.nome]

    });

  }

  onSubmit() {

    this.submitted = true;

    if (this.form.valid) {

      let msgSuccess = 'Imóvel criada com sucesso!';
      let msgError = 'Erro ao criar imóvel, tente novamente!';
      if (this.form.value.id) {
        msgSuccess = 'Categoria atualizada com sucesso!';
        msgError = 'Erro ao atualizar imovel, tente novamente!';
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
