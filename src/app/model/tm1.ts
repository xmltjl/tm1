export interface Cubes {
  ID: string;
  Cells: Cube[];
}

export interface Cube {
  Ordinal: number;
  Value: number;
  FormattedValue: string;
}

export interface Dimensions {
  value: Dimension[];
}

export interface Dimension {
  '@odata.etag': string;
  Name: string;
  UniqueNamex: string;
}
