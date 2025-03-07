import { httpResource } from '@angular/common/http';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cashanova';

  table = signal<string>('a');

  tableResource = httpResource<Table[]>(
    () => `https://api.nbp.pl/api/exchangerates/tables/${this.table()}/`,
  );

  rates = computed(() => this.tableResource.value()?.[0].rates);
}

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
