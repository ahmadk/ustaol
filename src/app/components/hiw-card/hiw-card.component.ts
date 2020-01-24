import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiw-card',
  templateUrl: './hiw-card.component.html',
  styleUrls: ['./hiw-card.component.scss']
})
export class HIWCardComponent implements OnInit {
  @Input() number;
  @Input() title;
  @Input() content;
  @Input() icon;

  constructor() {
  }

  ngOnInit() {
  }

}
