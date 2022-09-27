import { Categoria } from './../../models/categoria';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly API = `${environment.API}categorias/`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Categoria[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id) {
    return this.http.get<Categoria>(`${this.API}${id}/`).pipe(take(1));
  }

  private create(categoria) {
    return this.http.post(this.API, categoria).pipe(take(1));
  }

  private update(categoria) {
    return this.http.put(`${this.API}${categoria.id}/`, categoria).pipe(take(1));
  }

  save(categoria) {
    if (categoria.id) {
      return this.update(categoria);
    }
    return this.create(categoria);
  }

  remove(id) {
    return this.http.delete(`${this.API}${id}/`).pipe(take(1));
  }
}
