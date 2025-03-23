import { TitleCasePipe } from '@angular/common';
import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { TablesService } from '../../nbp/services/tables.service';
import { FlagsService } from '../../services/flags.service';

@Component({
  selector: 'app-exchange-carousel',
  imports: [TitleCasePipe],
  templateUrl: './exchange-carousel.component.html',
  styleUrl: './exchange-carousel.component.css',
})
export class ExchangeCarouselComponent {
  flags = inject(FlagsService);
  tables = inject(TablesService);

  rates = this.tables.rates;

  carousel = viewChild<ElementRef>('carousel');
}
