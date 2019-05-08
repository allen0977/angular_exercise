import { StockMarketActions, StockMarketActionTypes } from '../actions/stock.actions';
import { StockMarketState } from '../models/stock.model';

export const initialState: StockMarketState = {
  stockSymbol: 'VRTX',
  loading: false
};

export function stockMarketReducer(
  state: StockMarketState = initialState,
  action: StockMarketActions
): StockMarketState {
  switch (action.type) {
    case StockMarketActionTypes.FETCH:
      return {
        ...state,
        loading: true,
        stock: null,
        error: null,
        stockSymbol: action.payload.symbol
      };

    case StockMarketActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        stock: action.payload.stock,
        error: null
      };

    case StockMarketActionTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        stock: null,
        error: action.payload.error
      };

    default:
      return state;
  }
}
