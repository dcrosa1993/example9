import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmComponent } from './dialog/confirm/confirm.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example9';
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  dialog_result = "";
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      height: '280px',
      width: '480px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialog_result = result;
    })
  }
}
