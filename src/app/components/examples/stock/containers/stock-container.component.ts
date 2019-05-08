import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromExample from 'app/components/examples/examples.state';
import { Observable } from 'rxjs';

import { ActionStockMarketFetch } from '../actions';
import { selectStockMarket } from '../selectors';
import { StockMarketState } from './../models/stock.model';

@Component({
    selector: 'app-stock-container',
    templateUrl: './stock-container.component.html',
    styleUrls: [
        './stock-container.component.css',
    ],
})
export class StockContainerComponent implements OnInit {
    stockData$: Observable<StockMarketState>;
    defaultStockSymbol = 'VRTX';
    // only select from store that exist in Examples state
    constructor(private store: Store<fromExample.State>, private route: ActivatedRoute) {}

    ngOnInit() {
        this.stockData$ = this.store.pipe(select(selectStockMarket));
        // The route snapshot also has the data
        // console.log(this.route.snapshot.data.stockData)
    }
    onStockSymbolChanges(stockSymbol: string) {
        if (this.emptyString(stockSymbol)) {
            this.store.dispatch(new ActionStockMarketFetch({ symbol: stockSymbol }));
        }
    }

    private emptyString(inputSearchTerm: string): boolean {
        return inputSearchTerm.length > 0;
    }
}
