
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, empty } from 'rxjs';

import { Categoria } from './../../../models/categoria';
import { CategoriaService } from './../categoria.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaResolverGuard implements Resolve<Categoria> {

  constructor(private service: CategoriaService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Categoria | Observable<Categoria> {
    
    if (route.params && route.params['id']){
      return this.service.loadByID(route.params['id'])
    }

    return of({
      id: number | 0,
      nome: string | '',
      status: boolean
    });

  }
  
}
