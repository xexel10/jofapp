import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { CategoriaService } from './../../../cadastros/categorias/categoria.service';
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

    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.service.loadByID(id)) //cancela as requisições anteriores e seta apenas o ultimo pedido
      )
      .subscribe(categoria => this.updateForm(categoria));

    this.form = this.fb.group({
      categoria: [null, Validators.required, Validators.minLength(3), Validators.maxLength(100)],
      status: [null]
    });

  }

  updateForm(categoria) {
    this.form.patchValue({
      id: categoria.id,
      categoria: categoria.nome,
      status: categoria.status
    });
  }
  onSubmit() {

    this.submitted = true;
    if (this.form.valid) {

      /*  this.service.create(this.form.value).subscribe(
          success => {
            this.modal.showAlertSuccess('Criado com sucesso!');
            this.location.back();
          },
          error => this.modal.showAlertDanger('Error ao criar categoria, tente novamente!'),
          () => console.log('request completo')
        );*/

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
