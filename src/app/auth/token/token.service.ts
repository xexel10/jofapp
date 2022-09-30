import { Injectable } from '@angular/core';

const KEY = 'USER';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor() { }

  hasToken(){
    //      truque para retornar booleano  
    return !!this.getToken()

}

setToken(token: any){
    window.localStorage.setItem(KEY, token);

}
getToken(){
    return window.localStorage.getItem(KEY)

}

removeToken(){
    window.localStorage.removeItem(KEY);

}
}
