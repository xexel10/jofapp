import { CrudService } from './../../shared/crud-service';
import { Injectable } from '@angular/core';
import { Categoria } from './../../models/categoria';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenService } from 'src/app/auth/token/token.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends CrudService<Categoria> {
  constructor(http: HttpClient, tokenService : TokenService) {
    super(http, `${environment.API}categorias/` ,tokenService);
  }

}
