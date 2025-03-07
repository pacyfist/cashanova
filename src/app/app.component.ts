import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablesService } from './nbp/services/tables.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cashanova';

  tables = inject(TablesService);
  rates = this.tables.rates;
}
