import { take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { FileHandle } from './../../models/file-handle';
import { Foto } from './../../models/foto';
import { Imovel } from './../../models/imovel';
import { CrudService } from '../../shared/crud-service';


import { Injectable } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenService } from 'src/app/auth/token/token.service';
import { Resposta } from '../../models/resposta';

@Injectable({
  providedIn: 'root'
})
export class ImovelService extends CrudService<Imovel> {

  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, `${environment.API}imoveis/`, tokenService);
  }

  deleteImage(id){
    return this.http.delete(`${environment.API}fotosImovel/${id}/`);
  }

  saveImages(file, imovel) {

    const formData = new FormData();
    formData.append('foto', file.foto);
    formData.append('imovel', imovel.id);
    formData.append('descricao', imovel.nome)
    return this.http.post(`${environment.API}fotosImovel/`, formData);
  }

  listar(): Observable<Resposta[]> {
    let retorno =  this.http.get<Resposta[]>(`${environment.API}imoveis/`);
    //retorno.subscribe({
    //  next: dados => console.log("Retorno: ", dados['results'])
    //});
    //console.log("Retorno: "+retorno)
    return retorno;

  }
}
