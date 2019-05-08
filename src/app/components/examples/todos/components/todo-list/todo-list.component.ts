import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todos.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: Array<Todo>;
  @Output()
  onUpdateTodo = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit() {}

  onToggleTodo(todo: Todo) {
    this.onUpdateTodo.emit(todo);
  }
}
