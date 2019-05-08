// import { v4 as uuid } from 'uuid';
import { TodosActionTypes, TodosActions } from '../actions/todos.actions';
import { Todo, TodosState } from '../models/todos.model';

export const initialState: TodosState = {
    filter: 'ALL',
    items: [
        { done: true, id: uuidv4(), name: 'Open Todo list example' },
        {
            done: false,
            id: uuidv4(),
            name: 'Use AngularSkeletonNgrx Starter in your project',
        },
    ],
};

export function todosReducer(state: TodosState = initialState, action: TodosActions): TodosState{
    switch (action.type) {
        case TodosActionTypes.ADD:
            return {
                ...state,
                items: [
                    {
                        done: false,
                        id: action.payload.id,
                        name: action.payload.name,
                    },
                    ...state.items,
                ],
            };

        case TodosActionTypes.TOGGLE:
            return {
                ...state,
                items: state.items.map((item: Todo) => (item.id === action.payload.id ? { ...item, done: !item.done } : item)),
            };

        case TodosActionTypes.REMOVE_DONE:
            return {
                ...state,
                items: state.items.filter((item: Todo) => !item.done),
            };

        case TodosActionTypes.FILTER:
            return { ...state, filter: action.payload.filter };

        default:
            return state;
    }
}

export function uuidv4(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
