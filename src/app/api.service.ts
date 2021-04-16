import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers: any = {
    'Content-Type': 'application/json',
  };

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${URL}posts`, { headers: this.headers });
  }

  getComments(): Observable<any> {
    return this.http.get(`${URL}comments`, { headers: this.headers });
  }

  crearPost({ title, body }): Observable<any> {
    return this.http.post(
      `${URL}comments`,
      { title, body, userId: 1 },
      { headers: this.headers }
    );
  }
}
