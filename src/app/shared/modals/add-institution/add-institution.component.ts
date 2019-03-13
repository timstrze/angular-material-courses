import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {AddPriorLearningInstitution} from '../../../actions/prior-learning-institution.actions';

@Component({
  selector: 'app-add-institution',
  templateUrl: './add-institution.component.html',
  styleUrls: ['./add-institution.component.scss']
})
export class AddInstitutionComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addInstitution() {
    this.store.dispatch(new AddPriorLearningInstitution({
      InstitutionName: 'InstitutionName',
      Courses: []
    }));
  }

}
