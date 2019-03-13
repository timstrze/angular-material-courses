import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddProgramComponent} from '../../shared/modals/add-program/add-program.component';
import {Select, Store} from '@ngxs/store';
import {ProgramState} from '../../state/program.state';
import {Observable} from 'rxjs';
import {IProgram} from '../../shared/interfaces/program.interface';
import {FetchPrograms} from '../../actions/program.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Select(ProgramState.loading) loading$: Observable<boolean>;
  @Select(ProgramState.programs) programs$: Observable<IProgram[]>;

  constructor(public dialog: MatDialog,
              private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new FetchPrograms());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProgramComponent, {
      width: '500px',
      autoFocus: false,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
