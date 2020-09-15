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
      "MDX": "
      WITH MEMBER [LOB Centre To].[Description] AS [}ElementAttributes_LOB Account].([}ElementAttributes_LOB Account].[Description])
      SELECT
      NON EMPTY {  [LOB Account].[INETII], [LOB Account].[NOINTE],[LOB Account].[SOPINC], [LOB Account].[XDIREX] }
      ON ROWS,
                { [LOB Centre To].[Description], [LOB Centre To].[MIRB4152], [LOB Centre To].[MIRB4892] }
      ON COLUMNS
      FROM [LOB Reporting]
      WHERE (
      [LOB Scenario].[Reportable Actual],
      [LOB Measure Reporting].[YTD], [LOB Period].[202005]
      )"
  }`,
  ];

  constructor() {}

  ngOnInit(): void {}
}
