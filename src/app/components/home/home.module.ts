import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { BottomSheetComponent, HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent,
        BottomSheetComponent,
    ],
    imports: [
        HomeRoutingModule,
        SharedModule,
    ],
    exports: [
        HomeRoutingModule.components,
    ],
    providers: [],
    entryComponents: [
        BottomSheetComponent,
    ],
    bootstrap: [],
})
export class HomeModule {}
