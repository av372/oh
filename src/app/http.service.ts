import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  //had to change the type to work in stackblitz
  get(path: string): Observable<HttpResponse<any> | object> {
    return this.http.get(path);
  }
}
