import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dimensions } from '../model/tm1';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    // generated via postman
    //Authorization: 'Basic QWRtaW46YXBwbGU=',
    //Authorization: 'Basic base64(mel:melpwd)',
    'Content-Type': 'application/json',
    //Cookie: 'TM1SessionId=WtzPLtMWJoN50uO5MYTMfQ',
    Authorization: 'Basic YWRtaW46',
    //Cookie: 'TM1SessionId=WtzPLtMWJoN50uO5MYTMfQ',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DimensionService {
  url: string = 'https://localhost:44312/api/v1/Dimensions';

  constructor(private http: HttpClient) {}

  getData(): Observable<Dimensions> {
    return this.http.get<Dimensions>(this.url, httpOptions);
  }

  // toggleCompleted(data: Todo): Observable<any> {
  //   const urlToUpdate = `${this.url}/${data.id}`;
  //   return this.http.put(urlToUpdate, data, httpOptions);
  // }

  // deleteData(data: Todo): Observable<Todo> {
  //   const urlToUpdate = `${this.url}/${data.id}`;
  //   return this.http.delete<Todo>(urlToUpdate, httpOptions);
  // }

  // addData(data: Todo): Observable<Todo> {
  //   return this.http.post<Todo>(this.url, data, httpOptions);
  // }
}
