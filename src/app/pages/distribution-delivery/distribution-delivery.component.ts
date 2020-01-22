import { Component, HostListener, OnInit } from '@angular/core';
import { faCheck, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-distribution-delivery',
  templateUrl: './distribution-delivery.component.html',
  styleUrls: ['./distribution-delivery.component.scss']
})
export class DistributionDeliveryComponent implements OnInit {
  faChecks = faCheck;
  faArrowDown = faArrowDown;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50) {
      document.getElementById('steps-line-1').classList.add('line-bg');
      document.getElementById('steps-number-1').classList.add('steps-active-number');
    } else {
      (document.getElementById('steps-line-1').classList.remove('line-bg'),
        document.getElementById('steps-number-1').classList.remove('steps-active-number'));
    }
    if (document.body.scrollTop > 577 ||
      document.documentElement.scrollTop > 577) {
      document.getElementById('steps-line-2').classList.add('line-bg');
      document.getElementById('steps-number-2').classList.add('steps-active-number');
    } else {
      (document.getElementById('steps-line-2').classList.remove('line-bg'),
        document.getElementById('steps-number-2').classList.remove('steps-active-number'));
    }
    if (document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000) {
      document.getElementById('steps-line-3').classList.add('line-bg');
      document.getElementById('steps-number-3').classList.add('steps-active-number');
      document.getElementById('steps-number-4').classList.add('steps-active-number');
    } else {
      (document.getElementById('steps-line-3').classList.remove('line-bg'),
        document.getElementById('steps-number-3').classList.remove('steps-active-number'));
    }
  }
}
