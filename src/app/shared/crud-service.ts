import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';
import { delay, tap, take } from 'rxjs/operators';
import { TokenService } from '../auth/token/token.service';

export class CrudService<T> {
  tokenService! : TokenService;
  acessToken: string = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1NTE1NjM3LCJpYXQiOjE2NjU1MTUzMzcsImp0aSI6ImQ0MDI4Y2E3ZmQ4NjRjYjI5MjU4NzIxYzc2YTdiYjgzIiwidXNlcl9pZCI6MX0.59kLu0DETYSYfLhAQ0sDV0g8JoMbWR8GpCL3HesOQ5w'
  constructor(protected http: HttpClient, private API_URL, private TOKEN) {}
  

  list() {
    this.tokenService = new TokenService();
    let headers = new HttpHeaders()
        .append('Authorization', 'Bearer ')
    return this.http.get<T[]>(this.API_URL, { headers })
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id) {
    return this.http.get<T>(`${this.API_URL}${id}/`).pipe(take(1));
  }

  private create(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  private update(record: T) {
    return this.http.put(`${this.API_URL}${record['id']}/`, record).pipe(take(1));
  }

  save(record: T) {
    if (record['id']) {
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id) {
    return this.http.delete(`${this.API_URL}${id}/`).pipe(take(1));
  }
}
