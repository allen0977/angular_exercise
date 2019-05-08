import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './components/add-user.component';
import { SearchUserComponent } from './components/search-user.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserManagementContainerComponent } from './containers/user-management.container';
import { AddUserDialogComponent } from './dialogs/add-user-dialog/add-user-dialog.component';
import { EditUserDialogComponent } from './dialogs/edit-user-dialog/edit-user-dialog.component';

const homeRoutes: Routes = [
    {
        canActivate: [], // Add in auth guard to make sure user has access to this page.
        component: UserManagementContainerComponent,
        path: '',
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class UserManagementRoutingModule {
    static components = [
        AddUserComponent,
        EditUserDialogComponent,
        AddUserDialogComponent,
        SearchUserComponent,
        UserTableComponent,
        UserManagementContainerComponent,
    ];
}
