import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-confirm',
    styleUrls: [
        './confirm.component.css',
    ],
    template: `
		<h2>Confirm</h2>
		<hr>
		<p>{{data.message}}</p>
		<footer>
			<button mat-raised-button [mat-dialog-close]="true" style="margin: 4px;">Ok</button>
			<button mat-raised-button [mat-dialog-close]="false" style="margin: 4px;">Cancel</button>
		</footer>
	`,
})
export class ConfirmComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
