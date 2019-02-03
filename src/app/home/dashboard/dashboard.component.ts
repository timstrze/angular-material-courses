import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddProgramComponent} from '../../shared/modals/add-program/add-program.component';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3],
        type: undefined
      }
    ]
  });

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProgramComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
