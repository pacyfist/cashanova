import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { TablesService } from '../../nbp/services/tables.service';
import { TitleCasePipe } from '@angular/common';
import { FlagsService } from '../../services/flags.service';
import { interval, take, timer } from 'rxjs';

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

  carousel = viewChild<ElementRef<HTMLDivElement>>('carousel');

  constructor() {
    interval(1000).subscribe((i) => {
      const element = this.carousel()?.nativeElement;
    });
  }
}
