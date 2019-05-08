import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import * as RouterActions from '../actions/router.actions';

@Injectable()
export class RouterEffects {
  constructor(private action$: Actions<Action>, private router: Router, private location: Location) {}

  // dispatch is false becuase, we do not want to dispatch any thing from this effect.
  @Effect({ dispatch: false })
  navigate$ = this.action$.pipe(
    ofType(RouterActions.GO),
    map((action: RouterActions.Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.action$.pipe(
    ofType(RouterActions.BACK),
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.action$.pipe(
    ofType(RouterActions.FORWARD),
    tap(() => this.location.forward())
  );
}
