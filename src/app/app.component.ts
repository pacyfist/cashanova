import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faDollarSign, faExchangeAlt, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ExchangeCarouselComponent } from "./components/exchange-carousel/exchange-carousel.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FontAwesomeModule, ExchangeCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cashanova';

  faBars = faBars;
  faMagnifyingGlass = faMagnifyingGlass;
  faExchangeAlt = faExchangeAlt;
  faDollarSign = faDollarSign;
}
