import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const KEY = 'ACCESS TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  horaToken: any;
  horaAtual: any;
  tempoValidadeToken: any;
  constructor(private http: HttpClient) { }

  hasToken() {
    //      truque para retornar booleano
    return !!this.getToken()

  }


  setToken(token: any, refresh?: any) {
    window.localStorage.setItem(KEY, token);
    window.localStorage.setItem('HORA', String(new Date().getTime()));

    if (refresh != undefined)
      window.localStorage.setItem('REFRESH', refresh)

  }

  getToken() {
   // console.log("GET TOKEN: ");
    //console.log(window.localStorage.getItem(KEY))
    if (window.localStorage.getItem(KEY) != null)
        this.verificaTokenExpirado();

    return window.localStorage.getItem(KEY)

  }

  removeToken() {
    window.localStorage.removeItem(KEY);

  }

  verificaTokenExpirado() {
      //console.log("verifica token expirado")
      this.horaToken = window.localStorage.getItem('HORA');
      this.horaAtual = new Date().getTime();
      if (this.horaAtual > Number(this.horaToken) + 60000) {
        console.log('token vencido, renovar');
        this.renovarToken();
      }
    else {
      // se não tiver tokenw
    }
  }


  renovarToken() {
    var record = { refresh: window.localStorage.getItem('REFRESH') };
    this.http.post(environment.TOKEN_REFRESH_URL, record).subscribe({
      next: (token) => {
        this.setToken(token['access']);
        console.log("TOKEN ATUALIZADO")
      },
      error: (erro) => { console.log("deu pau ao recuperar token");
        this.removeToken();
      }
    })
  }

}
