import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Select, Store} from '@ngxs/store';
import {PriorLearningInstitutionState} from '../../state/prior-learning-institution.state';
import {IPriorLearningInstitution} from '../../shared/interfaces/prior-learning-institution.interface';
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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private store: Store,
              public dialog: MatDialog) {
  }

  @Select(PriorLearningInstitutionState.loading) loading$: Observable<boolean>;
  @Select(PriorLearningInstitutionState.priorLearningInstitutions) priorLearningInstitutions$: Observable<IPriorLearningInstitution[]>;

  ngOnInit() {
    this.store.dispatch(new FetchPriorLearningInstitutions());
  }

  openInstitutionDialog(): void {
    const dialogRef = this.dialog.open(AddInstitutionComponent, {
      width: '500px',
      autoFocus: false,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openCourseDialog(institution): void {
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '500px',
      autoFocus: false,
      data: {institution: institution}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
