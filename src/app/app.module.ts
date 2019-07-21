import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {PriorLearningInstitutionState} from './state/prior-learning-institution.state';
import {ProgramState} from './state/program.state';
import {PriorLearningInstitutionsService} from './shared/services/prior-learning-institutions.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    NgxsModule.forRoot([
      PriorLearningInstitutionState,
      ProgramState
    ], {developmentMode: !environment.production}),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: 'MY_APP_STORE',
      disabled: environment.production
    })
  ],
  entryComponents: [],
  providers: [
    PriorLearningInstitutionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
