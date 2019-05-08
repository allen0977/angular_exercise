import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';

import { UserTableComponent } from '../components/user-table/user-table.component';
import { AddUserDialogComponent } from '../dialogs/add-user-dialog/add-user-dialog.component';
import { EditUserDialogComponent } from '../dialogs/edit-user-dialog/edit-user-dialog.component';
import { User } from '../models/user.model';

@Component({
    selector: 'app-user-management',
    templateUrl: './user-management.container.html',
    styleUrls: [
        './user-management.container.css',
    ],
})
export class UserManagementContainerComponent implements OnInit {
    users: User[];
    employees$: Observable<Array<User>>;

    @ViewChild(UserTableComponent) userTable: DatatableComponent;

    constructor(public dialog: MatDialog) {}

    ngOnInit() {}

    openEditUserDialog(user: User): void {
        this.dialog.open(EditUserDialogComponent, {
            data: user,
            panelClass: 'edit-user-dialog',
        });
    }

    openAddUserDialog(evtName: string): void {
        this.dialog.open(AddUserDialogComponent, {
            data: this.employees$,
            panelClass: 'add-user-dialog',
        });
    }
}
