import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples.component';
import { StockPriceCardComponent } from './stock/components/stock-price-card.component';
import { StockSearchComponent } from './stock/components/stock-search.component';
import { StockContainerComponent } from './stock/containers/stock-container.component';
import { StockComponentResolver } from './stock/guards/stock-data.resolver';
import { AddTodoComponent } from './todos/components/add-todo/add-todo.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodosContainerComponent } from './todos/containers/todos-container.component';

const exmapleComponentRoutes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
      },
      {
        path: 'todos',
        component: TodosContainerComponent
      },
      {
        path: 'stocks',
        component: StockContainerComponent,
        resolve: { stockData: StockComponentResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(exmapleComponentRoutes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {
  static components = [
    ExamplesComponent,
    TodosContainerComponent,
    StockContainerComponent,
    AddTodoComponent,
    TodoListComponent,
    StockPriceCardComponent,
    StockSearchComponent
  ];
}
