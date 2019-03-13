import {Component, Inject, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {AddCourseToInstitution} from '../../../actions/prior-learning-institution.actions';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../add-program/add-program.component';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(public store: Store,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }

  addPriorLearningCourse() {
    this.store.dispatch(new AddCourseToInstitution({
        Code: 'Tim', Title: 'Test'
      },
      this.data.institution
    ));
  }

}
