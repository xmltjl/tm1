export class Hierarchy {
  '@odata.etag': string;
  Name: string;
}

export class Member {
  Name: string;
}

export class Tuple {
  Ordinal: number;
  Members: Member[];
}

export class Axis {
  Ordinal: number;
  Cardinality: number;
  Hierarchies: Hierarchy[];
  Tuples: Tuple[];
}

export class Cell {
  Ordinal: number;
  Value?: number;
}

export class Tm1View {
  '@odata.context': string;
  ID: string;
  Axes: Axis[];
  Cells: Cell[];

  length: number;
  pop: string;
  push: string;
  concat: string;
  join: string;
  reverse: string;
  shift: string;
  slice: string;
  sort: string;
  splice: string;
  unshift: string;
  indexOf: string;
  lastIndexOf: string;
  every: string;
  some: string;
  forEach: string;
  map: string;
  filter: string;
  reduce: string;
  reduceRight: string;
  find: string;
  findIndex: string;
  fill: string;
  copyWithin: string;
  [Symbol.iterator]: string;
  entries: string;
  keys: string;
  values: string;
  [Symbol.unscopables]: string;
  includes: string;
}

export class Tm1CubeData {
  column: string[][];
  value: (string | number)[][];

  constructor(column: string[][], value: (string | number)[][]) {
    this.column = column;
    this.value = value;
  }
}
