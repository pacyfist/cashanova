import { httpResource } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Table } from '../dtos/tables.dto';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  constructor() {}

  filter = signal<null | 'today' | number | Date | [Date, Date]>(new Date('2025-03-21'));

  tableResource = httpResource<Table[]>(() => {
    const filter = this.filter();
    if (filter === 'today') {
      return 'https://api.nbp.pl/api/exchangerates/tables/a/today/';
    } else if (typeof filter === 'number') {
      return `https://api.nbp.pl/api/exchangerates/tables/a/last/${filter}/`;
    } else if (filter instanceof Date) {
      const date = filter.toISOString().split('T')[0]
      return `https://api.nbp.pl/api/exchangerates/tables/a/${date}/`;
    } else if (filter instanceof Array) {
      const startDate = filter[0].toISOString().split('T')[0]
      const endDate = filter[1].toISOString().split('T')[0]
      return `https://api.nbp.pl/api/exchangerates/tables/a/${startDate}/${endDate}`;
    }

    return `https://api.nbp.pl/api/exchangerates/tables/a/`;
  });

  rates = computed(() => {
    const response = this.tableResource.value();
    return response?.[response?.length - 1].rates ?? [];
  });
}
