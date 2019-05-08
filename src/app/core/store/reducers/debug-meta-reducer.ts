/**
 * A meta-reducer for logging all actions. This is optional and only active during developmemt mode.
 * Add it to the Meta Reducers array to print all actions and state.
 */
import { ActionReducer } from '@ngrx/store';
import { State } from '.';

// console.log all actions and state for debugging purpose
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('State', state);
    console.log('Action', action);

    return reducer(state, action);
  };
}
