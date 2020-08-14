import { Component, OnInit } from '@angular/core';
import { Cubes, Cube } from '../model/tm1';
import { CubeService } from '../service/cube.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss'],
})
export class Dashboard1Component implements OnInit {
  cubes: Cube[];

  constructor(private cs: CubeService) {}

  ngOnInit() {
    // temporary fix the cube name
    const cubeName: string = 'HS Summary';
    const viewName: string = 'Default';

    this.cs.getData(cubeName, viewName).subscribe((cubeData: Cubes) => {
      this.cubes = cubeData.Cells;
      console.log(this.cubes);
    });
  }
}
