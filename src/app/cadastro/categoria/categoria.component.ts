import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {


  //variável que irá conter os itens da página. 
  //Na declaração utilizar o "formulario!:: FormGroup" ou "formulario: FormGroup | undefined"
  //Utilizar o formControlName no html no lugar de name para linkar as váriaveis.
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      status: [null]
    });
  }  
}