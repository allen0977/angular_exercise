import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

import {
  ActionStockMarketFetch,
  ActionStockMarketFetchError,
  ActionStockMarketFetchSuccess,
  StockMarketActionTypes,
} from '../actions/stock.actions';
import { Stock } from '../models/stock.model';
import { StockService } from '../services/stock.service';

@Injectable()
export class StockEffects {
    constructor(private actions$: Actions<Action>, private stockService: StockService) {}

    // This is an effect, which will dispatch an action back to our reducer.
    @Effect()
    fetchStock(): Observable<Action> {
        return this.actions$.pipe(
            // listen to action here coming from components.
            ofType<ActionStockMarketFetch>(StockMarketActionTypes.FETCH),
            filter((action: ActionStockMarketFetch) => this.emptyString(action.payload.symbol)),
            debounceTime(500),
            distinctUntilChanged(),
            switchMap((action: ActionStockMarketFetch): Observable<Action> =>
                this.stockService
                    .fetchStockValue(action.payload.symbol)
                    .pipe(
                        map((stock: Stock) => new ActionStockMarketFetchSuccess({ stock })),
                        catchError((error: HttpErrorResponse) => of(new ActionStockMarketFetchError({ error })))
                    )
            )
        );
    }

    private emptyString(inputSearchTerm: string): boolean {
        return inputSearchTerm.length > 0;
    }
}
