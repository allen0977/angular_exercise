import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: 'user-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableComponent implements OnInit {
  users = [
    {
      id: '1',
      firstName: 'Michael',
      lastName: 'Hawes',
      fullName: 'Michael Hawes',
      email: 'michael_hawes@vrtx.com',
      role: 'Administrator'
    }
  ];
  constructor() {}
  ngOnInit() {}
}
