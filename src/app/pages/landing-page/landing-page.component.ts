import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { TablesService } from '../../nbp/services/tables.service';

@Component({
  selector: 'app-landing-page',
  imports: [FontAwesomeModule, TitleCasePipe],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  tables = inject(TablesService);

  rates = this.tables.rates;

  faExchangeAlt = faExchangeAlt;
}
