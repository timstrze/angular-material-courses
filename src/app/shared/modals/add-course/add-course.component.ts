import {Component, Inject, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {AddCourseToInstitution} from '../../../actions/prior-learning-institution.actions';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../add-program/add-program.component';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  courseForm = this.fb.group({
    courseCode: [''],
    courseTitle: ['']
  });

  constructor(public store: Store,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddCourseComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }

  addPriorLearningCourse() {
    this.store.dispatch(new AddCourseToInstitution({
        Code: this.courseForm.get('courseCode').value, Title: this.courseForm.get('courseTitle').value
      },
      this.data.institution
    )).subscribe(() => {
      this.dialogRef.close('Course Added');
    });
  }

}
