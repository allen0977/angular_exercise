import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {
  examples = [
    {
      path: 'todos',
      label: 'Todos'
    },
    {
      path: 'stocks',
      label: 'Stock'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
