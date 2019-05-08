import { StockMarketActionTypes, StockMarketActions } from '../actions/stock.actions';
import { StockMarketState } from '../models/stock.model';

export const initialState: StockMarketState = {
    loading: false,
    stockSymbol: 'VRTX',
};

export function stockMarketReducer(state: StockMarketState = initialState, action: StockMarketActions): StockMarketState{
    switch (action.type) {
        case StockMarketActionTypes.FETCH:
            return {
                ...state,
                error: null,
                loading: true,
                stock: null,
                stockSymbol: action.payload.symbol,
            };

        case StockMarketActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                stock: action.payload.stock,
            };

        case StockMarketActionTypes.FETCH_ERROR:
            return {
                ...state,
                error: action.payload.error,
                loading: false,
                stock: null,
            };

        default:
            return state;
    }
}
