import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {CoursesService} from '../../shared/services/courses.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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

  priorLearningInstitutions$: Observable<any[]>;

  constructor(private breakpointObserver: BreakpointObserver, private courseService: CoursesService) {}

  ngOnInit () {
    this.priorLearningInstitutions$ = this.courseService.getPriorLearningCourses().pipe(
      map(result => {
        return result;
      })
    );
  }
}
