import { createSelector } from '@ngrx/store';
import { ExamplesState, selectExamples } from 'app/components/examples/examples.state';

export const selectTodosState = createSelector(selectExamples, (state: ExamplesState) => state.todos);
