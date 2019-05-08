/**
 * Shared Module for Angular Seed application.
 * shared module contains items that will be re-used and referenced by the components declared in other feature modules.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  MatSidenavHelperDirective,
  MatSidenavTogglerDirective
} from './directives/mat-sidenav-helper/mat-sidenav-helper.directive';
import { MatSidenavHelperService } from './directives/mat-sidenav-helper/mat-sidenav-helper.service';
import { MaterialModule } from './material.module';
import { CamelCaseToDashPipe } from './pipes/camel-case-to-dash.pipe';
import { GetByIdPipe } from './pipes/get-by-id.pipe';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    MatSidenavHelperDirective,
    MatSidenavTogglerDirective,
    CamelCaseToDashPipe,
    GetByIdPipe,
    SafePipe,
    NgxDatatableModule
  ],
  providers: [MatSidenavHelperService],
  declarations: [MatSidenavHelperDirective, MatSidenavTogglerDirective, CamelCaseToDashPipe, GetByIdPipe, SafePipe]
})
export class SharedModule {}
