import {Component, Input, OnInit} from '@angular/core';
import {faArrowDown, faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @Input() title;
  @Input() content;
  // @Output() toggle: EventEmitter<null> = new EventEmitter();
  @Input() isExpanded = false;

  faArrowRight = faArrowRight;
  faArrowDown = faArrowDown;

  constructor() {
  }

  toggleState(panelId) {
    // return !this.isExpanded;
  }

  ngOnInit() {
  }

}
