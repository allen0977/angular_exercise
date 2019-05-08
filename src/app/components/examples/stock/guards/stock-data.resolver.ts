import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromExample from 'app/components/examples/examples.state';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { ActionStockMarketFetch } from '../actions/stock.actions';
import { StockMarketState } from '../models/stock.model';
import { selectStockMarket } from '../selectors';

@Injectable()
export class StockComponentResolver implements Resolve<StockMarketState> {
  readonly defaultStockSymbol = 'VRTX';

  constructor(private store: Store<fromExample.State>) {}

  resolve(): Observable<StockMarketState> {
    // Get the data from store or call the API
    return this.store.pipe(
      select(selectStockMarket),
      tap((stockData: StockMarketState) => {
        // Issue the dispatch, If stock is null or if the error flag is not null in the state.
        if ((!stockData.hasOwnProperty('stock') && !stockData.stock) || stockData.error) {
          this.store.dispatch(new ActionStockMarketFetch({ symbol: this.defaultStockSymbol }));
        }
      }),
      // We will only take(1) if there exists the 'stock' property within stockData.
      filter(stockData => !!(stockData.hasOwnProperty('stock') && stockData.stock)),
      take(1)
    );
  }
}
