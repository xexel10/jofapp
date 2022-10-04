import { TokenService } from './../auth/token/token.service';
//Angular route guards are interfaces provided by Angular which, when implemented, allow us to control
//the accessibility of a route based on conditions provided in class implementation of that interface.
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';


import { AuthService } from './../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router, private tokenService: TokenService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    return this.verificarAcesso();
  }

  private verificarAcesso(){
    //if (this.authService.userIsAuth()){
    //  return true;
   // }
   if (this.tokenService.hasToken()){
    return true;
   }

    this.router.navigate(['/login']);
    console.log('auth guard redirect')
    return false;
  }

    //não deixa baixar o código chunck
   	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: verificando se usuário pode carregar o cod módulo');

      return this.verificarAcesso();
    }

}
