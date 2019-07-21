import {LayoutModule} from '@angular/cdk/layout';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

import {NavigationComponent} from './navigation.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {CoursesService} from '../../shared/services/courses.service';
import {of} from 'rxjs';
import {NgxsModule, Store} from '@ngxs/store';
import {PriorLearningInstitutionState} from '../../state/prior-learning-institution.state';
import {PriorLearningInstitutionsService} from '../../shared/services/prior-learning-institutions.service';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let store: Store;

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
        MatInputModule,
        MatChipsModule,
        MatProgressBarModule,
        NgxsModule.forRoot([PriorLearningInstitutionState])
      ],
      providers: [
        {
          provide: PriorLearningInstitutionsService, useValue: {
            fetchPriorLearningInstitutions: jasmine.createSpy('fetchPriorLearningInstitutions').and.returnValue(of([]))
          }
        },
        {
          provide: CoursesService, useValue: {
            getPriorLearningCourses: jasmine.createSpy('getPriorLearningCourses').and.returnValue(of([]))
          }
        }
      ]
    }).compileComponents();
    store = TestBed.get(Store);
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
