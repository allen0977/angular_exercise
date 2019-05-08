import 'hammerjs';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFeatureComponent } from './components/app-feature/app-feature.component';
import { AppGridComponent } from './components/app-grid/app-grid.component';
import { HomeModule } from './components/home/home.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Third party Module
/*
Lazy loaded modules are not registered in app.module.
Table Module
UserManagementModule
Examples Module
*/

@NgModule({
    declarations: [
        AppComponent,
        AppGridComponent,
        AppFeatureComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        CoreModule,
        HomeModule,
        AppRoutingModule,
        ToastrModule.forRoot({
            closeButton: true,
            newestOnTop: false,
            positionClass: 'toast-bottom-right',
            autoDismiss: true,
        }),
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {}
