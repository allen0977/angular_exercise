/**
 * This file acts as a barrel for all the states, reducers found under examples module.
 */
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '../../core/store';
import { StockMarketState } from './stock/models/stock.model';
import * as fromStock from './stock/reducers';
import { TodosState } from './todos/models/todos.model';
import * as fromTodos from './todos/reducers';

/**
 * Interface for a slice of state. Top level state interface in examples module (ExamplesState) is just a map of keys to inner state types.
 */
export interface ExamplesState {
    stock: StockMarketState;
    todos: TodosState;
}

// Extends our Base App State.
export interface State extends fromRoot.State {
    examples: ExamplesState;
}

/**
 * Our state is composed of a map of action reducer functions.  A slice of state is managed by individual reducers.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 * Here the examplesReducer only manages a slice of state that consist of stockData.
 */
export const examplesReducer: ActionReducerMap<ExamplesState> = {
    stock: fromStock.stockMarketReducer,
    todos: fromTodos.todosReducer,
};

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 * Here we are going to create a feature selector to select `examples` state from our App state.
 */
export const selectExamples = createFeatureSelector<State, ExamplesState>('examples');
