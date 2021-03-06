import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() image;
  @Input() title;
  @Input() description;
  @Input() url;
  @Input() alt;
  @Input() time;
  @Input() icon;
  @Input() iconSpan;
  faClock = faClock;

  constructor() {
  }

  ngOnInit() {
  }

}
