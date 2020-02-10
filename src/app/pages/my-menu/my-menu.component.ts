import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyPlanSkipComponent } from '../my-plan-skip/my-plan-skip.component';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.scss']
})
export class MyMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  @Component({
    selector: 'app-my-plan-skip',
    templateUrl: '../my-plan-skip/my-plan-skip.component.html',
  })
  export;
  class;
  MyPlanSkipComponent;

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(MyPlanSkipComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

}
