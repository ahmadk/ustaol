import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faqs',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @Input() title;
  @Input() icon;
  @Input() content;
  disabled = false;
  faArrowRight = faArrowRight;

  constructor() {
  }

  ngOnInit() {
  }

}
