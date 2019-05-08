/**
 * Exception service to handle bad http response. Allows to add HTML support to error messages.
 * It uses ngx-toastr service to display error messages.
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError as observableThrowError } from 'rxjs';

// Custom Imports
@Injectable()
export class ExceptionService {
    constructor(public toastr: ToastrService) {}

    /**
   * Method to catch bad http response and display a custom error message using ngx-toastr.
   * @param error (Response | Observable | any)
   * @returns {Observable<string>}
   */
    catchBadResponse(error: Response | Observable<any> | any): Observable<string> {
        let errMessage: string;
        if (error instanceof Response) {
            try {
                errMessage = error.json().error;
            } catch (err) {
                // create html error message to be displayed on ngx-toastr
                errMessage = this.createHTMLResponse(error);
            }
        }
        return observableThrowError(errMessage);
    }

    /**
   * This method issues a toast having the error responses.
   * @param {HttpErrorResponse} err - The Http error response
   */
    errorResponse(err: HttpErrorResponse): void {
        if (err.error instanceof Error) {
            // A client-side or network error occurred.
            this.toastr.error(this.createHTMLResponse(err), err.name, { enableHtml: true });
        } else {
            // The backend returned an unsuccessful response code.
            // create html error message to be displayed on ngx-toastr
            this.toastr.error(this.createHTMLResponse(err), err.name, { enableHtml: true });
        }
    }

    /**
   * This method is used to form HTML response for any error object.
   * @param err (Response | HttpErrorResponse)
   * @return {string} - HTML string of error message
   */
    createHTMLResponse(err: HttpErrorResponse | Response): string {
        return (
            '<p>Status: ' +
            ' ' +
            `${err.status}` +
            '<br>' +
            'StatusText: ' +
            ' ' +
            `${err.statusText || ''}` +
            '<br>' +
            'Path: ' +
            ' ' +
            `${err.url.slice(err.url.indexOf('com') + 3) || ''}` +
            '</p>'
        );
    }
}
