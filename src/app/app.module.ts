import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AddProgramComponent} from './shared/modals/add-program/add-program.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
// import {PriorLearningCourseState} from './state/prior-learning-course.state';
import {PriorLearningInstitutionState} from './state/prior-learning-institution.state';

@NgModule({
  declarations: [
    AppComponent,
    AddProgramComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    NgxsModule.forRoot([
      // PriorLearningCourseState,
      PriorLearningInstitutionState
    ], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  entryComponents: [
    AddProgramComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
