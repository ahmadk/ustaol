import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type subscriptionContentTypes = { title: string; subtitle: string; icon: string }[];

@Component({
  selector: 'app-how-subscription-works',
  templateUrl: './how-subscription-works.component.html',
  styleUrls: ['./how-subscription-works.component.scss']
})
export class HowSubscriptionWorksComponent implements OnInit {
  faChecks = faCheck;

  constructor() {
  }

  ngOnInit() {
  }

}
