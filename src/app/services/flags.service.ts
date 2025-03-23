import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlagsService {
  mapping: Record<string, string> = {
    THB: 'TH',
    USD: 'US',
    AUD: 'AU',
    HKD: 'HK',
    CAD: 'CA',
    NZD: 'NZ',
    SGD: 'SG',
    EUR: 'EU',
    HUF: 'HU',
    CHF: 'CH',
    GBP: 'GB',
    UAH: 'UA',
    JPY: 'JP',
    CZK: 'CZ',
    DKK: 'DK',
    ISK: 'IS',
    NOK: 'NO',
    SEK: 'SE',
    RON: 'RO',
    BGN: 'BG',
    TRY: 'TR',
    ILS: 'IL',
    CLP: 'CL',
    PHP: 'PH',
    MXN: 'MX',
    ZAR: 'ZA',
    BRL: 'BR',
    MYR: 'MY',
    IDR: 'ID',
    INR: 'IN',
    KRW: 'KR',
    CNY: 'CN',
  };

  getFlagUrl(currency: string): string | null {
    if (this.mapping[currency]) {
      return `https://flagcdn.com/32x24/${this.mapping[currency].toLowerCase()}.png`;
    }
    return null;
  }
}
