import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablesService } from './nbp/services/tables.service';
import { TitleCasePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleCasePipe, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cashanova';
  icons = icons;

  tables = inject(TablesService);
  rates = this.tables.rates;
}
