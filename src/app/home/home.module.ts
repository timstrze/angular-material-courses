import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {NavigationComponent} from './navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatChipsModule,
  MatProgressBarModule,
  MatBadgeModule,
  MatSelectModule
} from '@angular/material';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AddInstitutionComponent } from '../shared/modals/add-institution/add-institution.component';
import { AddCourseComponent } from '../shared/modals/add-course/add-course.component';

@NgModule({
  declarations: [NavigationComponent, DashboardComponent, AddInstitutionComponent, AddCourseComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatChipsModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  entryComponents: [AddInstitutionComponent, AddCourseComponent]
})
export class HomeModule {
}
