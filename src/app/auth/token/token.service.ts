import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const KEY = 'ACCESS TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor(private http: HttpClient) { }

  hasToken(){
    //      truque para retornar booleano  

    //console.log('Token expirado')
    return !!this.getToken()

}

setToken(token: any, refresh?: any){
    window.localStorage.setItem(KEY, token);
    if (refresh != undefined)
      window.localStorage.setItem('REFRESH', refresh )
    window.localStorage.setItem('HORA', String(new Date().getTime()))

}
getToken(){
  if (window.localStorage.getItem(KEY)) {
    var horaToken = window.localStorage.getItem('HORA');
    var horaAtual = new Date().getTime();
    if (horaAtual > Number(horaToken)+60000){
        console.log('token venceu');
        //refresh do token
        var record = {refresh: window.localStorage.getItem('REFRESH')}
        this.http.post(environment.TOKEN_REFRESH_URL, record).subscribe({
          next: (token) => {this.setToken(token['access']); 
                      console.log("TOKEN ATUALIZADO")},
          error: (erro) => {console.log("deu pau no login")}
        })
      } else {
      console.log('Token existe e é valido');
    }
  }
  return window.localStorage.getItem(KEY)

}

removeToken(){
    window.localStorage.removeItem(KEY);

}
}
