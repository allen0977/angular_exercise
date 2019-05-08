import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

import { User } from '../../models/user.model';

@Component({
    selector: 'app-edit-user-dialog',
    templateUrl: './edit-user-dialog.component.html',
    styleUrls: [
        './edit-user-dialog.component.css',
    ],
    encapsulation: ViewEncapsulation.None,
})
export class EditUserDialogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<EditUserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: User,
        public dialog: MatDialog
    ) {}

    ngOnInit() {}
}
