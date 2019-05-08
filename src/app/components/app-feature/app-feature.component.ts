import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-app-feature',
    templateUrl: './app-feature.component.html',
    styleUrls: [
        './app-feature.component.css',
    ],
})
export class AppFeatureComponent implements OnInit {
    versions = environment.versions;

    features: any[];

    constructor() {
        this.bindData();
    }

    ngOnInit() {}

    bindData() {
        this.features = [
            {
                documentationUrl: 'https://angular.io/docs/ts/latest/',
                gitHubUrl: 'https://github.com/angular/angular',
                subTitle: 'Modern powerful framework for Mobile & Desktop.',
                title: 'Angular',
                version: this.versions.angular,
            },
            {
                documentationUrl: 'https://material.angular.io/',
                gitHubUrl: 'https://github.com/angular/material2/',
                subTitle: 'Material Design components for Angular.',
                title: 'Angular Material',
                version: this.versions.material,
            },
            {
                documentationUrl: 'https://github.com/angular/angular-cli/wiki',
                gitHubUrl: 'https://github.com/angular/angular-cli',
                subTitle: 'CLI tool for Angular.',
                title: 'Angular CLI',
                version: this.versions.angularCli,
            },
            {
                documentationUrl: 'http://reactivex.io/rxjs/',
                gitHubUrl: 'https://github.com/ReactiveX/RxJS',
                guideUrl: 'https://www.learnrxjs.io/',
                subTitle: 'Reactive programming with async collections using Observables.',
                title: 'RxJS',
                version: this.versions.rxjs,
            },
            {
                documentationUrl: 'https://github.com/angular/flex-layout/wiki',
                gitHubUrl: 'https://github.com/angular/flex-layout',
                subTitle: 'Provides HTML UI layout for Angular applications',
                title: 'Angular FlexLayout',
                version: this.versions.flexLayout,
            },
            {
                documentationUrl: 'https://www.typescriptlang.org/docs/home.html',
                gitHubUrl: 'https://github.com/Microsoft/TypeScript',
                subTitle: 'TypeScript is a superset of JavaScript.',
                title: 'Typescript',
                version: this.versions.typescript,
            },
            {
                documentationUrl: 'https://github.com/ngrx/platform/tree/master/docs',
                gitHubUrl: 'https://github.com/ngrx/platform',
                subTitle: 'State Managment Library build using RxJS for Angular.',
                title: 'NGRX',
                version: this.versions.ngrx,
            },
            {
                documentationUrl: 'https://fontawesome.com/icons',
                gitHubUrl: 'https://github.com/FortAwesome/Font-Awesome',
                subTitle: 'Easy to use vector icons and social logos',
                title: 'Font Awesome 5',
            },
            {
                documentationUrl: 'https://material.angular.io/guide/theming',
                guideUrl: 'https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1',
                subTitle: 'Flexible theming support for provided and custom components',
                title: 'Themes',
            },
            {
                documentationUrl: 'https://angular.io/guide/lazy-loading-ngmodules',
                subTitle: 'Faster startup time with lazy loaded feature modules',
                title: 'Lazy Loading',
            },
            {
                documentationUrl: 'https://scttcper.github.io/ngx-toastr/',
                gitHubUrl: 'https://github.com/scttcper/ngx-toastr',
                subTitle: 'Easy Toasts for Angular',
                title: 'Ngx Toast',
                version: this.versions.toastr,
            },
        ];
    }

    openLink(link: string) {
        window.open(link, '_blank');
    }
}
