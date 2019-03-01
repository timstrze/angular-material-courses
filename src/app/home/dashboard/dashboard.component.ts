import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddProgramComponent} from '../../shared/modals/add-program/add-program.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProgramComponent, {
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
