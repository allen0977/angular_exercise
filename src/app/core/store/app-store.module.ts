import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CustomSerializer, effects, metaReducers, reducers } from '.';
import { environment } from '../../../environments/environment';

// Not used in Production
@NgModule({
    declarations: [],
    imports: [
        /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
        StoreModule.forRoot(reducers, { metaReducers }),
        /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
        StoreRouterConnectingModule.forRoot(),
        /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
        EffectsModule.forRoot(effects),
        /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    exports: [],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer },
    ],
})
export class AppStoreModule {}
