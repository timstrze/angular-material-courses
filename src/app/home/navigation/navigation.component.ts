import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CoursesService} from '../../shared/services/courses.service';
import {Select, Store} from '@ngxs/store';
// import {AddPriorLearningCourse} from '../../actions/prior-learning-course.actions';
import {PriorLearningInstitutionState} from '../../state/prior-learning-institution.state';
import {PriorLearningInstitution} from '../../shared/interfaces/prior-learning-institution.interface';
import {FetchPriorLearningInstitutions} from '../../actions/prior-learning-institution.actions';
import {MatDialog} from '@angular/material';
import {AddInstitutionComponent} from '../../shared/modals/add-institution/add-institution.component';
import {AddCourseComponent} from '../../shared/modals/add-course/add-course.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  animal: string;
  name: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  // priorLearningInstitutions$: Observable<any[]>;

  constructor(private breakpointObserver: BreakpointObserver,
              private store: Store,
              public dialog: MatDialog,
              private courseService: CoursesService) {
  }

  @Select(PriorLearningInstitutionState.loading) loading$: Observable<boolean>;
  @Select(PriorLearningInstitutionState.priorLearningInstitutions) priorLearningInstitutions$: Observable<PriorLearningInstitution[]>;

  ngOnInit() {
    this.store.dispatch(new FetchPriorLearningInstitutions());
  }

  openInstitutionDialog(): void {
    const dialogRef = this.dialog.open(AddInstitutionComponent, {
      width: '500px',
      autoFocus: false,
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openCourseDialog(): void {
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '500px',
      autoFocus: false,
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
