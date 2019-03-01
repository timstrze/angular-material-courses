import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(public store: Store) { }

  ngOnInit() {
  }

  addPriorLearningCourse() {
    this.store.dispatch('');
  }

}
