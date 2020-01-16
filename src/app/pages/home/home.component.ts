import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import { CarouselComponent, SlidesOutputData } from 'ngx-owl-carousel-o';

type MealsPreviewType = { subtitle: string; title: string; url: string }[];
type discountItemsTypes = { title: string; }[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('carouselComponent', {static: false}) carouselComponent: CarouselComponent;
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
  public discountItems: discountItemsTypes = [{
    title: '<i class="fa fa-check mr-2"></i> Lorem ipsum dolor sit amet ut  magna aliquyam.',
  }, {
    title: ' <i class="fa fa-check mr-2"></i> Consetetur sadipscing elitr labore et dolore.',
  }, {
    title: ' <i class="fa fa-check mr-2"></i> Sed diam nonumy eirmod tempor invidunt.',
  }];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class=\'fa fa-chevron-left\'></i>', '<i class=\'fa fa-chevron-right\'></i>'],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      400: {
        items: 2,
        nav: true,
      },
      740: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
    nav: true,
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.carouselComponent);
    const childNode: HTMLCollection = this.carouselComponent.el.nativeElement.children;
    const childNode1 = childNode[0].children;
    const element: Element = childNode1[1];
    element.classList.remove('disabled');
  }
}
