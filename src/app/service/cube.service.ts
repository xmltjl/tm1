import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cubes } from '../model/tm1';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic YWRtaW46',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CubeService {
  url: string = 'https://localhost:44312/api/v1';

  constructor(private http: HttpClient) {}

  getData1(cubeName: string, viewName: string): Observable<Cubes> {
    const href = `${this.url}/Cubes('${cubeName}')/Views('${viewName}')/tm1.Execute?$expand=Cells`;
    return this.http.post<Cubes>(href, null, httpOptions);
  }

  // hard code mdx to test
  getData(cubeName: string, viewName: string): Observable<Cubes> {
    const mdx = `{
      "MDX": "SELECT {[BT Calendar Period].[202001], [BT Calendar Period].[202002]} ON COLUMNS, {[HS Centre].[MI View]} ON ROWS FROM [HS Summary]"
    }`;
    const href = `${this.url}/ExecuteMDX?$expand=Axes($expand=Hierarchies($select=Name),Tuples($expand=Members($select=Name))),Cells($select=Ordinal,Value)`;
    return this.http.post<Cubes>(href, mdx, httpOptions);
  }
}
