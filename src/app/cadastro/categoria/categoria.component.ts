import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: any = {
    nome:'teste',
    status: 'true'
  }

  constructor() { }


  onSubmit(form: FormsModule) {
    console.log(this.categoria)
    console.log(form)
  }

  ngOnInit(): void {
  }

}
