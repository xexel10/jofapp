import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  private userAutenticado: boolean = false;

  showMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(email: string, password:string){

    if (email === 'user2@example.com' && password === 'strinG123@'){
        this.userAutenticado = true;

        this.showMenuEmmiter.emit(true); // emite para o appcomponent que estã logado

        this.router.navigate(['/']);

    }else{
      this.userAutenticado = false;
      this.showMenuEmmiter.emit(false); 
    }
  }
  userIsAuth(){
    return this.userAutenticado;
  }
}
