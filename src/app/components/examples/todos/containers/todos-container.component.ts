import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';
import * as fromExample from 'app/components/examples/examples.state';

import { ActionTodosAdd, ActionTodosFilter, ActionTodosRemoveDone, ActionTodosToggle } from '../actions';
import { Todo, TodosFilter, TodosState } from '../models/todos.model';
import { selectTodosState } from './../selectors/todos.selectors';

@Component({
    selector: 'app-todos',
    templateUrl: './todos-container.component.html',
    styleUrls: [
        './todos-container.component.css',
    ],
})
export class TodosContainerComponent implements OnInit {
    todos: Array<Todo>;
    filterType: TodosFilter = 'ALL';
    isRemoveDoneTodosDisabled: boolean = true;

    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
        private snackBar: MatSnackBar,
        private store: Store<fromExample.State>
    ) {
        iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/icon/add-24px.svg'));
        iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/icon/delete-24px.svg'));
        iconRegistry.addSvgIcon('done', sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/icon/done-24px.svg'));
        iconRegistry.addSvgIcon('done_all', sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/icon/done_all-24px.svg'));
    }

    ngOnInit() {
        this.getAllTodos();
    }

    private getAllTodos() {
        this.store.pipe(select(selectTodosState)).subscribe((todos: TodosState) => {
            this.filterType = todos.filter;
            if (this.filterType === 'ALL') {
                this.todos = todos.items;
            } else {
                const predicate = this.filterType === 'DONE' ? (t) => t.done : (t) => !t.done;
                this.todos = todos.items.filter(predicate);
            }
        });
    }

    onAddTodo(newTodoName: string) {
        this.store.dispatch(new ActionTodosAdd({ name: newTodoName }));
        this.showNotification(`"${newTodoName}" added`);
    }

    onUpdateTodo(todo: Todo) {
        const newStatus = todo.done ? 'active' : 'done';
        this.store.dispatch(new ActionTodosToggle({ id: todo.id }));
        todo.done ? (this.isRemoveDoneTodosDisabled = true) : (this.isRemoveDoneTodosDisabled = false);
        this.showNotification(`Toggled "${todo.name}" to ${newStatus}`);
    }

    onRemoveDoneTodos() {
        this.store.dispatch(new ActionTodosRemoveDone());
        this.showNotification('Removed Done Todos!');
        this.isRemoveDoneTodosDisabled = true;
    }

    onFilterTodos(filter: TodosFilter) {
        this.store.dispatch(new ActionTodosFilter({ filter }));
        this.showNotification(`Filtered to ${filter.toLowerCase()}`);
    }

    private showNotification(message: string, action?: string) {
        return this.snackBar.open(message, action, {
            duration: 2500,
            panelClass: 'align-center',
        });
    }
}
