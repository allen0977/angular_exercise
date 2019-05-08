import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ConfirmService } from 'app/core/services/confirm.service';
import { ToastService } from 'app/core/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private confirmService: ConfirmService,
    private toastr: ToastService,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {}

  showConfirmDialog() {
    this.confirmService.confirm('Are you sure about this action?').subscribe(result => console.log(result));
  }

  showSuccess() {
    this.toastr.showSuccess('Success Toast', 'Success:');
  }
  showInfo() {
    this.toastr.showInfo('Info Toast', 'Info:');
  }
  showWarning() {
    this.toastr.showWarning('Warning Toast', 'Warning:');
  }
  showError() {
    this.toastr.showError('Error Toast', 'Error');
  }

  openColorSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }
}

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  template: `
  <mat-nav-list fxLayout="column" fxLayoutGap="20px">
  <a style="background-color:#47959f; color: white;" mat-list-item>
    <span mat-line>Primary</span>
    <span mat-line>The primary color being used in this app.</span>
  </a>
  <a style="background-color:#5c5c5a; color: white;" mat-list-item>
    <span mat-line>Secondary</span>
    <span mat-line>The secondary color being used in this app.</span>
  </a>
  <a style="background-color:#c94a4e; color: white;" mat-list-item>
    <span mat-line>Error</span>
    <span mat-line>The error color being used in this app.</span>
  </a>
  <a href="https://material.angular.io/guide/theming"  target="_blank" mat-list-item>
    <span mat-line>Learn more about them here and how to use them in your app.</span>
  </a>
</mat-nav-list>
  `
})
export class BottomSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
