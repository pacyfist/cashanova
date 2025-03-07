export interface Rate {
  currency: string;
  code: string;
  mid: number;
}

export interface Table {
  table: string;
  no: string;
  effectiveDate: string;
  rates: Rate[];
}
