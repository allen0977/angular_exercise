import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTableComponent } from './app-table.component';

const demoRoutes: Routes = [{ path: '', component: AppTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(demoRoutes)],
  exports: [RouterModule]
})
export class AppTableRoutingModule {
  static components = [AppTableComponent];
}
