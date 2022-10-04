//Angular route guards are interfaces provided by Angular which, when implemented, allow us to control
//the accessibility of a route based on conditions provided in class implementation of that interface.
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


import { AuthService } from './../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    return this.verificarAcesso();
  }

  private verificarAcesso(){
    if (this.authService.userIsAuth()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
