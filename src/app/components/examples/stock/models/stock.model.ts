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
    primaryExchange: string;
    stockSymbol: string;
    stockValue: number;
}

export interface StockMarketState {
    error?: HttpErrorResponse;
    loading: boolean;
    stock?: Stock;
    stockSymbol: string;
}
