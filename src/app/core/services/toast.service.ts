/**
 * Singleton Toast Service to display success, error, info, warn messages.
 */
import { Injectable } from '@angular/core';
// Custom Imports
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  showSuccess(msg: string, title?: string) {
    this.toastr.success(msg, title);
  }

  showError(msg: string, title?: string) {
    this.toastr.error(msg, title);
  }

  showInfo(msg: string, title?: string) {
    this.toastr.info(msg, title);
  }

  showWarning(msg: string, title?: string) {
    this.toastr.warning(msg, title);
  }
}
