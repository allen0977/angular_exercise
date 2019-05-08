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
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Eagerly loaded
  {
    path: 'grid',
    component: AppGridComponent
  },
  {
    path: 'feature',
    component: AppFeatureComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  // Lazy loaded routes
  {
    path: 'table',
    loadChildren: 'app/components/app-table/app-table.module#AppTableModule'
  },
  {
    path: 'examples',
    loadChildren: 'app/components/examples/examples.module#ExamplesModule'
  },
  {
    path: 'user-management',
    loadChildren: 'app/components/user-management/user-management.module#UserManagementModule'
  },
  // Below pattern matches any other path and usually redirects to 404 page
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
