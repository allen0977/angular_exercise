import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-user',
    template: `
    <button mat-raised-button style="background: white;">
      <span style="color:  #47959F;">Add User</span>
    </button>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
