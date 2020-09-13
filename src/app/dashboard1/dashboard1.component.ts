import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss'],
})
export class Dashboard1Component implements OnInit {
  //to chnage this to read from cube
  mdxJson = [
    ` {
    "MDX": "SELECT
      NON EMPTY { [LOB Centre To].[MIRB4152 - Business],[LOB Centre To].[MIRB4892 - Consumer]  }  ON COLUMNS,
      NON EMPTY { [LOB Account].[INETII - Net interest income], [LOB Account].[NOINTE],[LOB Account].[SOPINC], [LOB Account].[XDIREX] } *
                { [LOB Line of Business].[01], [LOB Line of Business].[03] } ON ROWS
      FROM [LOB Reporting]
      WHERE ( [LOB Scenario].[Reportable Actual], [LOB Measure Reporting].[YTD], [LOB Period].[202005])"
  }`,

    ` {
    "MDX": "SELECT
      NON EMPTY {  [LOB Account].[INETII], [LOB Account].[NOINTE],[LOB Account].[SOPINC], [LOB Account].[XDIREX] } *
                { [LOB Mode].[01], [LOB Mode].[02] } ON COLUMNS,
      NON EMPTY { [LOB Centre To].[MIRB4152 - Business],[LOB Centre To].[MIRB4892 - Consumer]  } *
                { [LOB Line of Business].[01], [LOB Line of Business].[02] } ON ROWS
      FROM [LOB Reporting]
      WHERE ( [LOB Scenario].[Reportable Actual], [LOB Measure Reporting].[YTD], [LOB Period].[202005])"
  }`,
  ];

  constructor() {}

  ngOnInit(): void {}
}
