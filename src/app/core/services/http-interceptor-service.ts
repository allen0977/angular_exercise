/**
 * This service implements the HttpInterceptor interface to provide a centralized error logging feature for all HTTP requests.
 * This new feature is available in with new HttpClient Module.
 * For more information visit: https://angular.io/guide/http#intercepting-all-requests-or-responses
 */
import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ExceptionService } from './exception.service';
import { ToastService } from './toast.service';

/**
 * Intercepts the HTTP responses, and in case that an error/exception is thrown, handles it
 * and extract the relevant information of it.
 */
@Injectable()
export class HttpErrorInterceptorService implements HttpInterceptor {
    constructor(private exceptionService: ExceptionService, private toastr: ToastService) {}

    /**
   * Intercepts an outgoing HTTP request, executes it and handles any error that could be triggered in execution.
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @return {Observable<HttpEvent<any>>}
   */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        return next.handle(req).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    // console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                    // Accessing the HTTP response (Non Error response) and show toast messages upon success/failure.
                    if ((req.method === 'POST' || req.method === 'PUT') && event.status === 200 && event.body['success']) {
                        this.toastr.showSuccess('Request Successful!');
                    } else if ((req.method === 'POST' || req.method === 'PUT') && event.status === 200 && !event.body['success']) {
                        this.toastr.showWarning('Request Failed!');
                    }
                }
            }),
            catchError((errorResponse: HttpErrorResponse) => {
                //TODO:  Enable below line to show a custom HTML response for the error
                // this.exceptionService.errorResponse(errorResponse);
                //TODO: Enable below line to show a Error Toast on any HTTP error.
                // this.toastr.showError('Http Request Error!');
                return observableThrowError(errorResponse.message);
            })
        );
    }
}

/**
 * Provider for the interceptor. You can register multiple Interceptors. They will be executed in the order of their registration.
 */
export const HttpErrorInterceptorProvider = {
    multi: true,
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptorService,
};
