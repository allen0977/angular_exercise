/**
 * This is the barrel file for exporting app wide reducers.
 */
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'environments/environment';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';
// Custom Meta Reducer
// import { logger } from './debug-meta-reducer';

// Interface for the Router State.
export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 * This is the State of the entire application.
 */
export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer
};

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

// Feature Selector for Router
export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

/**
 * Custom Serializer.
 * Angular Router also has its own state tree: Router State Tree
 * The ngrx router store will actually listen to Angular Routing events. Anytime you navigate anywhere or something  changes in the url, below function will get called with new state.
 * Read More here: https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer
 */
export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState; // Equivalent const url = routerState.url;
    const { queryParams } = routerState.root;
    // Here we are hijacking Angular Router Tree and adding few properties in our ngrx state tree.
    let state: ActivatedRouteSnapshot = routerState.root;
    // loop over Angular Router State tree
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    return { url, queryParams, params };
  }
}
