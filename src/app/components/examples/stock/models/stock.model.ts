import { HttpErrorResponse } from '@angular/common/http';

export class StockData {
  stockValue: number;
  stockSymbol: string;
  primaryExchange: string;
  constructor() {
    this.stockValue = 0;
    this.stockSymbol = '';
    this.primaryExchange = '';
  }
}

export interface Stock {
  stockValue: number;
  stockSymbol: string;
  primaryExchange: string;
}

export interface StockMarketState {
  stockSymbol: string;
  loading: boolean;
  stock?: Stock;
  error?: HttpErrorResponse;
}
