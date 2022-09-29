import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { CategoriaService } from './../categoria.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})

export class CategoriasFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: CategoriaService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const categoria = this.route.snapshot.data['categoria'];

    this.form = this.fb.group({
      id: [categoria.id],
      nome: [categoria.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      status: [categoria.status]
    });

  }

  onSubmit() {

    this.submitted = true;
    if (this.form.valid) {

      let msgSuccess = 'Categoria criada com sucesso!';
      let msgError = 'Erro ao criar categoria, tente novamente!';
      if (this.form.value.id) {
        msgSuccess = 'Categoria atualizada com sucesso!';
        msgError = 'Erro ao atualizar categoria, tente novamente!';
      }

      this.service.save(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        error => this.modal.showAlertDanger(msgError)
      );

    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset;

  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

}
