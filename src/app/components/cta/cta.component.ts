import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {
  @Input() title;
  @Input() subtitle;
  @Input() url;
  @Input() urlText;
  @Input() imgUrl = '../../../assets/images/banner-cta.png';

  constructor() {
  }

  ngOnInit() {
  }

}
