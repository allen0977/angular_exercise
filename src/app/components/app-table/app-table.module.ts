import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AppTableRoutingModule } from './app-table-routing.module';

@NgModule({
  declarations: [AppTableRoutingModule.components],
  imports: [AppTableRoutingModule, SharedModule],
  exports: [AppTableRoutingModule.components],
  providers: [],
  bootstrap: []
})
export class AppTableModule {}
