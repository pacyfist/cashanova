import { TitleCasePipe } from '@angular/common';
import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { interval } from 'rxjs';
import { TablesService } from '../../nbp/services/tables.service';
import { FlagsService } from '../../services/flags.service';

@Component({
  selector: 'app-exchange-carousel',
  imports: [TitleCasePipe],
  templateUrl: './exchange-carousel.component.html',
  styleUrl: './exchange-carousel.component.css',
})
export class ExchangeCarouselComponent {
  readonly flags = inject(FlagsService);
  readonly tables = inject(TablesService);

  readonly rates = this.tables.rates;

  readonly carousel = viewChild<ElementRef<HTMLDivElement>>('carousel');

  constructor() {
    // interval(1000).subscribe((i) => {
    //   const carousel = this.carousel();

    //   if (this.carousel()) {
    //     const carouselElement = carousel?.nativeElement as HTMLDivElement;
    //     const children = [...carouselElement.childNodes].filter((c) => c.nodeType == Node.ELEMENT_NODE);
    //     const childElement = children[i % children.length] as HTMLDivElement;

    //     carouselElement.scrollLeft = childElement.offsetLeft - carouselElement.offsetLeft;
    //   }
    // });
  }
}
