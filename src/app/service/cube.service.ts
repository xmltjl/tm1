import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cubes } from '../model/tm1';

const httpOptions = {
  headers: new HttpHeaders({
    // generated via postman
    //Authorization: 'Basic QWRtaW46YXBwbGU=',
    //Authorization: 'Basic base64(mel:melpwd)',
    'Content-Type': 'application/json',
    Authorization: 'Basic YWRtaW46',
    //Cookie: 'TM1SessionId=gsR4rNFmn5DM7NyFXmu7rg',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CubeService {
  //https://medium.com/@lucian.cbn/catcomponent-html-3-5cb2e33a07d
  url: string = 'https://localhost:44312/api/v1';

  constructor(private http: HttpClient) {}

  getData1(cubeName: string, viewName: string): Observable<Cubes> {
    //https://stackoverflow.com/questions/47757655/how-to-add-headers-to-my-angular-post-request/47757775
    const href = `${this.url}/Cubes('${cubeName}')/Views('${viewName}')/tm1.Execute?$expand=Cells`;
    return this.http.post<Cubes>(href, null, httpOptions);
  }

  // hard code mdx to test
  getData(cubeName: string, viewName: string): Observable<Cubes> {
    //https://stackoverflow.com/questions/36689594/getting-data-from-cognos-tm1-via-rest-api
    const mdx = `{
      "MDX": "SELECT {[BT Calendar Period].[202001], [BT Calendar Period].[202002]} ON COLUMNS, {[HS Centre].[MI View]} ON ROWS FROM [HS Summary]"
    }`;
    const href = `${this.url}/ExecuteMDX?$expand=Axes($expand=Hierarchies($select=Name),Tuples($expand=Members($select=Name))),Cells($select=Ordinal,Value)`;
    return this.http.post<Cubes>(href, mdx, httpOptions);
  }
}
