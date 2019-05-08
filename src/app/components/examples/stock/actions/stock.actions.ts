import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { Stock } from '../models/stock.model';

export const enum StockMarketActionTypes {
    FETCH = '[Stock] Fetch',
    FETCH_SUCCESS = '[Stock] Fetch Success',
    FETCH_ERROR = '[Stock] Fetch Error',
}

export class ActionStockMarketFetch implements Action {
    readonly type = StockMarketActionTypes.FETCH;

    constructor(readonly payload: { symbol: string }) {}
}

export class ActionStockMarketFetchSuccess implements Action {
    readonly type = StockMarketActionTypes.FETCH_SUCCESS;

    constructor(readonly payload: { stock: Stock }) {}
}

export class ActionStockMarketFetchError implements Action {
    readonly type = StockMarketActionTypes.FETCH_ERROR;

    constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export type StockMarketActions = ActionStockMarketFetch | ActionStockMarketFetchSuccess | ActionStockMarketFetchError;
