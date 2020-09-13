import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cell, Tm1View, Tm1CubeData } from '../model/tm1.model';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //Andrew Stevens
    // Authorization: 'Basic YWRtaW46',

    //Home
    Authorization: 'Basic YWRtaW46',

    //wbc
    // Authorization: 'Basic bWVsOm1lbHB3ZA==',
  }),
};

@Injectable({ providedIn: 'root' })
export class TM1Service {
  //wbc
  // url: string = 'https://10.104.112.113:11112/api/v1/';

  //home
  url: string = 'https://localhost:44312/api/v1/';
  mdxChanged = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  // Post is required to get TM1 Cube data
  postRequest(mdx: string): Observable<Tm1CubeData> {
    const href = `${this.url}ExecuteMDX?$expand=Axes($expand=Hierarchies($select=Name),Tuples($expand=Members($select=Name))),Cells($select=Ordinal,Value)`;
    return this.http.post<Tm1View>(href, mdx, httpOptions).pipe(
      map((data: Tm1View) => {
        const x_axes = data.Axes[0];
        const y_axes = data.Axes[1];
        const z_axes: Cell[] = data.Cells;

        let cubeColumns: string[][] = [];

        for (let i = 0; i < x_axes.Hierarchies.length; i++) {
          cubeColumns[i] = [];
          for (let t of x_axes.Tuples) {
            cubeColumns[i].push(t.Members[i].Name);
          }

          // pad the column (containing the row name)
          for (let j = y_axes.Hierarchies.length - 1; j >= 0; j--) {
            if (i === 0) {
              cubeColumns[i].unshift(y_axes.Hierarchies[j].Name);
            } else {
              cubeColumns[i].unshift('');
            }
          }
        }


        let cubeData: (string | number)[][] = [];
        for (let t = 0; t < y_axes.Tuples.length; t++) {
          cubeData[t] = [];
          // insert row label
          for (let i = 0; i < y_axes.Hierarchies.length; i++) {
            cubeData[t].push(y_axes.Tuples[t].Members[i].Name);
          }
          // insert values
          for (let j = 0; j < x_axes.Cardinality; j++) {
            cubeData[t].push(Math.round(z_axes[t * j].Value));
          }
        }

        return new Tm1CubeData(cubeColumns, cubeData);
      })
    );
  }




  updateMdx(mdx: string): void {}
}
