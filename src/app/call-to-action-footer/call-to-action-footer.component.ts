import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-to-action-footer',
  templateUrl: './call-to-action-footer.component.html',
  styleUrls: ['./call-to-action-footer.component.scss']
})
export class CallToActionFooterComponent implements OnInit {
  @Input() image;
  @Input() title;
  @Input() description;
  constructor() { }

  ngOnInit() {
  }

}
