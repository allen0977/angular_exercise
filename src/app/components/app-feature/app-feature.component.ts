import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-app-feature',
  templateUrl: './app-feature.component.html',
  styleUrls: ['./app-feature.component.css']
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
        version: this.versions.angular,
        title: 'Angular',
        subTitle: 'Modern powerful framework for Mobile & Desktop.',
        gitHubUrl: 'https://github.com/angular/angular',
        documentationUrl: 'https://angular.io/docs/ts/latest/'
      },
      {
        version: this.versions.material,
        title: 'Angular Material',
        subTitle: 'Material Design components for Angular.',
        gitHubUrl: 'https://github.com/angular/material2/',
        documentationUrl: 'https://material.angular.io/'
      },
      {
        version: this.versions.angularCli,
        title: 'Angular CLI',
        subTitle: 'CLI tool for Angular.',
        gitHubUrl: 'https://github.com/angular/angular-cli',
        documentationUrl: 'https://github.com/angular/angular-cli/wiki'
      },
      {
        version: this.versions.rxjs,
        title: 'RxJS',
        subTitle: 'Reactive programming with async collections using Observables.',
        gitHubUrl: 'https://github.com/ReactiveX/RxJS',
        documentationUrl: 'http://reactivex.io/rxjs/',
        guideUrl: 'https://www.learnrxjs.io/'
      },
      {
        version: this.versions.flexLayout,
        title: 'Angular FlexLayout',
        subTitle: 'Provides HTML UI layout for Angular applications',
        gitHubUrl: 'https://github.com/angular/flex-layout',
        documentationUrl: 'https://github.com/angular/flex-layout/wiki'
      },
      {
        version: this.versions.typescript,
        title: 'Typescript',
        subTitle: 'TypeScript is a superset of JavaScript.',
        gitHubUrl: 'https://github.com/Microsoft/TypeScript',
        documentationUrl: 'https://www.typescriptlang.org/docs/home.html'
      },
      {
        version: this.versions.ngrx,
        title: 'NGRX',
        subTitle: 'State Managment Library build using RxJS for Angular.',
        gitHubUrl: 'https://github.com/ngrx/platform',
        documentationUrl: 'https://github.com/ngrx/platform/tree/master/docs'
      },
      {
        title: 'Font Awesome 5',
        subTitle: 'Easy to use vector icons and social logos',
        gitHubUrl: 'https://github.com/FortAwesome/Font-Awesome',
        documentationUrl: 'https://fontawesome.com/icons'
      },
      {
        title: 'Themes',
        subTitle: 'Flexible theming support for provided and custom components',
        documentationUrl: 'https://material.angular.io/guide/theming',
        guideUrl: 'https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1'
      },
      {
        title: 'Lazy Loading',
        subTitle: 'Faster startup time with lazy loaded feature modules',
        documentationUrl: 'https://angular.io/guide/lazy-loading-ngmodules'
      },
      {
        version: this.versions.toastr,
        title: 'Ngx Toast',
        subTitle: 'Easy Toasts for Angular',
        gitHubUrl: 'https://github.com/scttcper/ngx-toastr',
        documentationUrl: 'https://scttcper.github.io/ngx-toastr/'
      }
    ];
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
