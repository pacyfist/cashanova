import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablesService } from './nbp/services/tables.service';
import { TitleCasePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCoffee, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleCasePipe, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cashanova';

  faCoffee = faCoffee;
  faBars = faBars;
  faMagnifyingGlass = faMagnifyingGlass;

  tables = inject(TablesService);
  rates = this.tables.rates;
}
