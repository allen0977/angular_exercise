import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: [
        './footer.component.css',
    ],
})
export class FooterComponent {
    appName = 'Angular Skeleton NGRX';
    todaysDate = new Date().getFullYear();
    constructor() {}
}
