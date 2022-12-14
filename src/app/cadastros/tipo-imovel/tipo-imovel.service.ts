import { CrudService } from './../../shared/crud-service';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TipoImovel } from 'src/app/models/tipo-imovel';
import { TokenService } from 'src/app/auth/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class TipoImovelService extends CrudService<TipoImovel> {

  constructor(http: HttpClient, tokenService : TokenService) {
    super(http, `${environment.API}tiposImoveis/`, tokenService);
  }

}
