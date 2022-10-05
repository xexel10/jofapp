
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Categoria } from './../../../models/categoria';
import { ImovelService } from '../imovel.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaResolverGuard implements Resolve<Categoria> {

  constructor(private service: ImovelService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Categoria | Observable<Categoria> {


    if (route.params && route.params['id']){
      return this.service.loadByID(route.params['id'])
    }
    const cat = {status:true} as Categoria;
    return of (cat);

  }

}
