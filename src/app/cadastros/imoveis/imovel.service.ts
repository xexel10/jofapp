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

  // upload(files: Set<File>) {

  //   const formData = new FormData();
  //   files.forEach(file => formData.append('file', file, file.name));

  //   return this.http.post(`${environment.API}fotosImovel/`, formData, {
  //     observe: 'events',
  //     reportProgress: true
  //   });
  // }  

  upload(foto: Foto) {

    //const formData = new FormData();
    //files.forEach(file => formData.append('file', file, file.name));

    return this.http.post(`${environment.API}fotosImovel/`,foto, {
           observe: 'events',
           reportProgress: true
         });
  }

}
