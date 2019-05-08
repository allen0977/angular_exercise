export interface Todo {
    done: boolean;
    id: string;
    name: string;
}

export type TodosFilter = 'ACTIVE' | 'ALL' | 'DONE';

export interface TodosState {
    filter: TodosFilter;
    items: Todo[];
}
