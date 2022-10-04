
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { TipoImovel } from './../../../models/tipo-imovel';
import { TipoImovelService } from '../tipo-imovel.service';


@Injectable({
  providedIn: 'root'
})
export class TipoImovelResolverGuard implements Resolve<TipoImovel> {

  constructor(private service: TipoImovelService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): TipoImovel | Observable<TipoImovel> {


    if (route.params && route.params['id']){
      return this.service.loadByID(route.params['id'])
    }
    const tp = {status:true} as TipoImovel;
    return of (tp);

  }

}
