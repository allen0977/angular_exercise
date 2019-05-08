import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-table',
    templateUrl: 'user-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent implements OnInit {
    users = [
        {
            email: 'michael_hawes@vrtx.com',
            firstName: 'Michael',
            fullName: 'Michael Hawes',
            id: '1',
            lastName: 'Hawes',
            role: 'Administrator',
        },
    ];
    constructor() {}
    ngOnInit() {}
}
