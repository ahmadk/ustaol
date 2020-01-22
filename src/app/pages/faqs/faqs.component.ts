import { Component, OnInit } from '@angular/core';
import { faArrowRight, faMoneyCheckAlt, faAddressCard, faTruck, faUnlock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  disabled = false;
  faArrowRight = faArrowRight;
  faMoneyCheckAlt = faMoneyCheckAlt;
  faAddressCard = faAddressCard;
  faTruck = faTruck;
  faUnlock = faUnlock;

  constructor() {
  }

  ngOnInit() {
  }

}
