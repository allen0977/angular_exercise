import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Injectable()
export class ConfirmService {
  constructor(private dialog: MatDialog) {}

  confirm(message: string) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '400px',
      data: { message }
    });

    return dialogRef.afterClosed();
  }
}
