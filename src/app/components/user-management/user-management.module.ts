import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from '../../shared/shared.module';
import { AddUserDialogComponent } from './dialogs/add-user-dialog/add-user-dialog.component';
import { EditUserDialogComponent } from './dialogs/edit-user-dialog/edit-user-dialog.component';
import { UserManagementRoutingModule } from './user-management-routing.module';

@NgModule({
    declarations: [
        UserManagementRoutingModule.components,
    ],
    imports: [
        UserManagementRoutingModule,
        SharedModule,
        NgxDatatableModule,
    ],
    providers: [],
    entryComponents: [
        EditUserDialogComponent,
        AddUserDialogComponent,
    ],
})
export class UserManagementModule {}
