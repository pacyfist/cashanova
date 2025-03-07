import { httpResource } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Table } from '../dtos/tables.dto';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  constructor() {}

  table = signal<string>('a');

  tableResource = httpResource<Table[]>(
    () => `https://api.nbp.pl/api/exchangerates/tables/${this.table()}/`,
  );

  rates = computed(() => this.tableResource.value()?.[0].rates);
}
