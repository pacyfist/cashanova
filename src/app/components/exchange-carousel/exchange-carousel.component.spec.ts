import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCarouselComponent } from './exchange-carousel.component';

describe('ExchangeCarouselComponent', () => {
  let component: ExchangeCarouselComponent;
  let fixture: ComponentFixture<ExchangeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
