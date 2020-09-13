import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Tm1CubeData } from '../model/tm1.model';
import { TM1Service } from '../service/tm1.service';

@Component({
  selector: 'app-tm1-crosstab',
  templateUrl: './tm1-crosstab.component.html',
  styleUrls: ['./tm1-crosstab.component.scss'],
})
export class Tm1CrosstabComponent implements OnInit {
  cubeColumns: string[][];
  cubeValues: (string | number)[][];
  isLoadingResults = true;
  @Input() mdx: string;

  constructor(private tm1s: TM1Service) {}

  ngOnInit(): void {
    if (!this.mdx) {
      // set default mdx if nor provided
      this.mdx = ` {
        "MDX": "SELECT
          NON EMPTY { [LOB Centre To].[MIRB4152],[LOB Centre To].[MIRB4892] } * { [LOB Mode].[01], [LOB Mode].[02] } ON COLUMNS,
          NON EMPTY { [LOB Account].[INETII], [LOB Account].[NOINTE],[LOB Account].[SOPINC], [LOB Account].[XDIREX] } * { [LOB Line of Business].[01], [LOB Line of Business].[02] } ON ROWS
          FROM [LOB Reporting]
          WHERE ( [LOB Scenario].[Reportable Actual], [LOB Measure Reporting].[YTD], [LOB Period].[202005])"
      }`;
    }

    this.tm1s.postRequest(this.mdx).subscribe((tm1CubeData: Tm1CubeData) => {
      this.cubeColumns = tm1CubeData.column;
      this.cubeValues = tm1CubeData.value;
    });
  }
}
