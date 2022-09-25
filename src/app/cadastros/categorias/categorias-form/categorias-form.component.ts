import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { CategoriaService } from './../../../cadastros/categorias/categoria.service';

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
    private location: Location  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      categoria:[null, Validators.required, Validators.minLength(3), Validators.maxLength(100)],
      status:[null]
    });

  }

  onSubmit(){

    this.submitted = true;
    if(this.form.valid){

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

  onCancel(){
    this.submitted = false;
    this.form.reset;

  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

}
