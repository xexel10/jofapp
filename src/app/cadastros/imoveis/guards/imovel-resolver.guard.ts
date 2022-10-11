import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ImovelService } from '../imovel.service';
import { Imovel } from './../../../models/imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelResolverGuard implements Resolve<Imovel> {

  constructor(private service: ImovelService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Imovel | Observable<Imovel> {


    if (route.params && route.params['id']){
      return this.service.loadByID(route.params['id'])
    }
    const imo = {} as Imovel;
    return of (imo);

  }

}
