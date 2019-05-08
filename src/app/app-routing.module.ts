/**
 * Main App Routing Angular Module for application.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppFeatureComponent } from './components/app-feature/app-feature.component';
import { AppGridComponent } from './components/app-grid/app-grid.component';
import { LogoutComponent } from './core/components/logout/logout.component';

const appRoutes: Routes = [
    // This route is for the landing page of the app: Dashboard
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // Eagerly loaded
    {
        component: AppGridComponent,
        path: 'grid',
    },
    {
        component: AppFeatureComponent,
        path: 'feature',
    },
    {
        component: LogoutComponent,
        path: 'logout',
    },
    // Lazy loaded routes
    {
        loadChildren: './components/app-table/app-table.module#AppTableModule',
        path: 'table',
    },
    {
        loadChildren: './components/examples/examples.module#ExamplesModule',
        path: 'examples',
    },
    {
        loadChildren: './components/user-management/user-management.module#UserManagementModule',
        path: 'user-management',
    },
    // Below pattern matches any other path and usually redirects to 404 page
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {}
