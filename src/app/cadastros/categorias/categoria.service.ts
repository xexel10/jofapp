import { CrudService } from './../../shared/crud-service';
import { Injectable } from '@angular/core';
import { Categoria } from './../../models/categoria';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenService } from 'src/app/auth/token/token.service';
import { Token } from '@angular/compiler';
import { Resposta } from 'src/app/models/resposta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends CrudService<Categoria> {
  constructor(http: HttpClient,  tokenService : TokenService) {
    super(http, `${environment.API}categorias/` ,tokenService);
  }

  listar(page: string): Observable<Resposta[]> {
    var retorno = new Observable<Resposta[]>;
    //if (url == ''){
      let headers = new HttpHeaders();
     // headers = headers = new HttpHeaders().append('Authorization', 'Bearer '+this.tokenService.getToken())
      retorno =  this.http.get<Resposta[]>(`${environment.API}categorias/?page=${page}`);
    //}
    //else
    //  retorno =  this.http.get<Resposta[]>(url);
    //retorno.subscribe({
    //  next: dados => console.log("Retorno: ", dados['results'])
    //});
    //console.log("Retorno: "+retorno)
    return retorno;

  }

}
