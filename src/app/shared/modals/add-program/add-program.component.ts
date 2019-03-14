import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface DialogData {
  institution: any;
}

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss']
})
export class AddProgramComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Graduate Certificate in Accounting',
    'Graduate Certificate in Project Management',
    'Human Resources Postbaccalaureate Certificate',
    'Cisco Networks Postbaccalaureate Certificate',
    'Graduate Certificate in Human Resources'];
  filteredOptions: Observable<string[]>;

  constructor(public dialogRef: MatDialogRef<AddProgramComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
