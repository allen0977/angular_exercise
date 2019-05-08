import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { TodosState } from '../../models/todos.model';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: [
        './add-todo.component.css',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent implements OnInit {
    @Input() todos$: Observable<TodosState>;
    @Output() emitOnAddTodo = new EventEmitter<string>();
    isAddTodoDisabled: boolean = true;
    newTodo: FormControl = new FormControl();
    constructor() {}

    ngOnInit() {
        this.onNewTodoChange();
    }

    onNewTodoChange() {
        this.newTodo.valueChanges.subscribe((newTodo: string) => {
            if (newTodo && newTodo.length >= 3) {
                this.isAddTodoDisabled = false;
            } else {
                this.isAddTodoDisabled = true;
            }
        });
    }

    onAddTodo() {
        this.emitOnAddTodo.emit(this.newTodo.value);
        this.onNewTodoClear();
    }

    onNewTodoClear() {
        this.newTodo.reset();
    }
}
