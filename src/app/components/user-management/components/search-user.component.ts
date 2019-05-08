import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-user',
    template: `
    <div fxLayout="row" fxLayoutAlign="center center" fxShow fxHide.xs>
      <mat-icon color="primary">search</mat-icon>
      <div
        class="mat-elevation-z4 ml-4 p-8"
        style="background: white; min-width: 250px; height: 40px; border-radius: 3px;"
      >
        <input matInput placeholder="Search Users" fxFlex />
      </div>
    </div>
    <div fxLayout="row" fxLayoutAlign="center center" fxHide fxShow.xs>
      <div class="mat-elevation-z4 ml-4 p-8" style="background: white; border-radius: 2px;">
        <mat-icon color="primary">search</mat-icon>
        <input matInput placeholder="Search Users" fxFlex />
      </div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchUserComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
