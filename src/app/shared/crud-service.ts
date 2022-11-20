import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap, take } from 'rxjs/operators';
import { TokenService } from '../auth/token/token.service';
import { Resposta } from '../models/resposta';

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
  listAll() {
    //this.tokenService = new TokenService();
    let headers = new HttpHeaders();
    headers = headers = new HttpHeaders().append('Authorization', 'Bearer '+this.tokenService.getToken())
    // ---------- remove a barra ------------
    this.API_URL = this.API_URL.substring(0, this.API_URL.length -1);
    // ------------ adiciona o getAll -------
    this.API_URL+= 'GetAll/';
    console.log('API URL:  ',this.API_URL);
    return this.http.get<T[]>(this.API_URL, { headers })
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id) {
    let headers = new HttpHeaders()
        .append('Authorization', 'Bearer '+this.tokenService.getToken());
      console.log("passou no loadbyid");
    return this.http.get<T>(`${this.API_URL}${id}/`, { headers }).pipe(take(1));
  }

  private create(record: T) {
    let headers = new HttpHeaders();
    headers = new HttpHeaders().append('Authorization', 'Bearer '+this.tokenService.getToken())

    return this.http.post(this.API_URL, record, { headers }).pipe(take(1));
  }

  private update(record: T) {
    let headers = new HttpHeaders();
    headers = new HttpHeaders().append('Authorization', 'Bearer '+this.tokenService.getToken())
    return this.http.put(`${this.API_URL}${record['id']}/`, record, {headers}).pipe(take(1));
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

  lista(page: string){
    var retorno = new Observable<Resposta[]>;
    //if (url == ''){
      let headers = new HttpHeaders();
      headers = headers = new HttpHeaders().append('Authorization', 'Bearer '+this.tokenService.getToken())
      return this.http.get<T[]>(`${this.API_URL}?page=${page}`, { headers })
      .pipe(
        delay(2000),
        tap(console.log)
      );

  }
}
