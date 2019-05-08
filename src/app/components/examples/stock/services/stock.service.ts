import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Stock } from '../models/stock.model';

@Injectable()
export class StockService {
    readonly stockApiUrl = 'https://api.iextrading.com/1.0/stock';
    constructor(private http: HttpClient) {}

    fetchStockValue(stockSymbol: string): Observable<Stock> {
        return this.http.get(`${this.stockApiUrl}/${stockSymbol}/quote`).pipe(
            map((data: object) => ({
                primaryExchange: data['primaryExchange'],
                stockSymbol: data['symbol'],
                stockValue: data['latestPrice'],
            }))
        );
    }
}
