import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-examples',
    templateUrl: './examples.component.html',
    styleUrls: [
        './examples.component.css',
    ],
})
export class ExamplesComponent implements OnInit {
    examples = [
        {
            label: 'Todos',
            path: 'todos',
        },
        {
            label: 'Stock',
            path: 'stocks',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
