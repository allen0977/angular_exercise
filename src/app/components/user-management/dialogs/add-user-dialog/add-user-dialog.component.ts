import { Component, Inject, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';

import { User } from '../../models/user.model';

@Component({
    selector: 'app-add-user-dialog',
    templateUrl: './add-user-dialog.component.html',
    styleUrls: [
        './add-user-dialog.component.css',
    ],
    encapsulation: ViewEncapsulation.None,
})
export class AddUserDialogComponent implements OnInit {
    userCtrl: FormControl = new FormControl();

    constructor(
        public dialogRef: MatDialogRef<AddUserDialogComponent>,
        public dialog: MatDialog,
        @Optional()
        @Inject(MAT_DIALOG_DATA)
        public employeeList$: Observable<Array<User>>
    ) {}

    ngOnInit() {}
}
