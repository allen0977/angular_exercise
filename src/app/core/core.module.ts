/**
 * Core Angular Module. It is a feature module that hosts the singular objects that are loaded only
 * once.
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoboothComponent } from './components/infobooth/infobooth.component';
import { InfoboothService } from './components/infobooth/infobooth.service';
import { LogoutComponent } from './components/logout/logout.component';
import { MobileSidenavComponent } from './components/mobile-sidenav/mobile-sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SettingsPannelComponent } from './components/settings-pannel/settings-pannel.component';
import { EnsureModuleLoadedOnceGuard } from './guards/module-import-guard';
import { ConfirmService } from './services/confirm.service';
import { ExceptionService } from './services/exception.service';
import { HttpErrorInterceptorProvider } from './services/http-interceptor-service';
import { UtilitiesService } from './services/utils.service';
import { AppStoreModule } from './store/app-store.module';

@NgModule({
  declarations: [
    NavbarComponent,
    ConfirmComponent,
    LogoutComponent,
    FooterComponent,
    SettingsPannelComponent,
    InfoboothComponent,
    NotificationsComponent,
    MobileSidenavComponent
  ],
  imports: [SharedModule, AppStoreModule],
  exports: [
    NavbarComponent,
    ConfirmComponent,
    FooterComponent,
    SettingsPannelComponent,
    InfoboothComponent,
    NotificationsComponent,
    MobileSidenavComponent,
    //CUSTOM NGRX Module
    AppStoreModule
  ],
  providers: [ConfirmService, ExceptionService, HttpErrorInterceptorProvider, InfoboothService, UtilitiesService],
  entryComponents: [ConfirmComponent],
  bootstrap: []
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want
  // it loaded once)
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    super(parentModule);
  }
}
