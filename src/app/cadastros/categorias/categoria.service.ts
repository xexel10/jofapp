import { CrudService } from './../../shared/crud-service';
import { Injectable } from '@angular/core';
import { Categoria } from './../../models/categoria';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends CrudService<Categoria> {

  constructor(http: HttpClient) {
    super(http, `${environment.API}categorias/`);
  }

}
