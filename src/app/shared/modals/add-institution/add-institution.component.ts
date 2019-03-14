import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {AddPriorLearningInstitution} from '../../../actions/prior-learning-institution.actions';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-institution',
  templateUrl: './add-institution.component.html',
  styleUrls: ['./add-institution.component.scss']
})
export class AddInstitutionComponent implements OnInit {

  institutionForm = this.fb.group({
    institutionName: ['']
  });

  options: string[] = [
    'University of Michigan',
    'Purdue University',
    'Florida State University',
    'Southern Illinois University',
    'Ohio State University'
  ];
  filteredOptions: Observable<string[]>;

  constructor(private store: Store,
              public dialogRef: MatDialogRef<AddInstitutionComponent>,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.filteredOptions = this.institutionForm.get('institutionName').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  addInstitution() {
    this.store.dispatch(new AddPriorLearningInstitution({
      InstitutionName: this.institutionForm.get('institutionName').value,
      Courses: []
    })).subscribe(() => {
      this.dialogRef.close('Institution Added');
    });
  }
}
