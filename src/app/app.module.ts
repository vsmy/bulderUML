import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { API_BASE_URL } from 'shared/service-proxies/event-service-proxy';
import { AppConsts } from 'shared/AppConsts';
import { ServiceProxyModule } from 'shared/service-proxies/service-proxy.module';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
export function getRemoteServiceBaseUrl(): string {
  return AppConsts.remoteServiceBaseUrl;
}
@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production
    }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    LoginModule,
    ServiceProxyModule,
    AppRoutingModule,
    // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [{ provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule {}
