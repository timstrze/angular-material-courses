import {LayoutModule} from '@angular/cdk/layout';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

import {NavigationComponent} from './navigation.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {CoursesService} from '../../shared/services/courses.service';
import {of} from 'rxjs';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent, DashboardComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule
      ],
      providers: [
        {
          provide: CoursesService, useValue: {
            getPriorLearningCourses: jasmine.createSpy('getPriorLearningCourses').and.returnValue(of([]))
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
