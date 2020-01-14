import { Component, OnInit } from '@angular/core';

type MealsPreviewType = { subtitle: string; title: string; url: string }[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public mealsPreview: MealsPreviewType = [{
    title: 'Select your Meals',
    subtitle: 'Choose your plan and enter your details',
    url: '../../assets/images/meals-preview.png',
  }, {
    title: 'We package and deliver',
    subtitle: 'We will deliver a packaged box with all ingredients',
    url: '../../assets/images/delivery-preview.png',
  }, {
    title: 'Cook, Eat n Repeat',
    subtitle: 'Choose your plan and enter your details',
    url: '../../assets/images/cooking.png',
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
