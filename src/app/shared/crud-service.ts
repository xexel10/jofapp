import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';
import { delay, tap, take } from 'rxjs/operators';
import { TokenService } from '../auth/token/token.service';

export class CrudService<T> {
  //tokenService! : TokenService;
  constructor(protected http: HttpClient, private API_URL, private tokenService: TokenService) {}


  list() {
    //this.tokenService = new TokenService();
    let headers = new HttpHeaders();

        if (String(this.API_URL).includes('imoveis') && !String(this.API_URL).includes('tipo-imovel')){
          console.log('Imoveis, logo não passará header')
          headers = new HttpHeaders(); // Se for listar imoveis cabeçalho deve ser vazio
        }
        else {
          console.log('Não é imoveis, logo vai passar header')
          headers = headers = new HttpHeaders().append('Authorization', 'Bearer '+this.tokenService.getToken())
         console.log('API URL:  ',this.API_URL);
        }
    return this.http.get<T[]>(this.API_URL, { headers })
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id) {
    let headers = new HttpHeaders()
        .append('Authorization', 'Bearer '+this.tokenService.getToken());
    return this.http.get<T>(`${this.API_URL}${id}/`).pipe(take(1));
  }

  private create(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  private update(record: T) {
    return this.http.put(`${this.API_URL}${record['id']}/`, record).pipe(take(1));
  }

  save(record: T) {
    if (record['id']) {
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id) {
    return this.http.delete(`${this.API_URL}${id}/`).pipe(take(1));
  }
}
