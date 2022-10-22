import { of } from 'rxjs';
import { FileHandle } from './../../models/file-handle';
import { Foto } from './../../models/foto';
import { Imovel } from './../../models/imovel';
import { CrudService } from '../../shared/crud-service';
import { Injectable } from '@angular/core';
import { Categoria } from '../../models/categoria';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenService } from 'src/app/auth/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ImovelService extends CrudService<Imovel> {

  constructor(http: HttpClient, tokenService: TokenService) {
    super(http, `${environment.API}imoveis/`, tokenService);
  }

  deleteImage(image){
    const az = this.http.delete(`${environment.API}fotosImovel/`, image);
    return az;
  }

  saveImages(file, imovel) {

    const formData = new FormData();
    formData.append('foto', file.foto);
    formData.append('imovel', imovel.id);
    formData.append('descricao', imovel.nome)
    return this.http.post(`${environment.API}fotosImovel/`, formData);
  }
}
