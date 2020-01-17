import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import { CarouselComponent, SlidesOutputData } from 'ngx-owl-carousel-o';

type MealsPreviewType = { subtitle: string; title: string; url: string }[];
type discountItemsTypes = { title: string; }[];
type slidesStoreTypes = { url: string; subtitle: string; alt: string }[];
type galleryStandardImage = { url: string; alt: string }[];
type mediaCompanyLogo = { url: string; alt: string }[];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
  public tastePicturesSlides: slidesStoreTypes = [{
    url: '../../assets/images/home-slider-1.png',
    subtitle: 'COD CAKES',
    alt: 'slider image',
  }, {
    url: '../../assets/images/home-slider-2.png',
    subtitle: 'THREE-BEAN ANCHO TURKEY CHILI',
    alt: 'slider image',
  }, {
    url: '../../assets/images/home-slider-3.png',
    subtitle: 'SICILIAN-STYLE CHICKEN PARM',
    alt: 'slider image',
  }, {
    url: '../../assets/images/home-slider-3.png',
    subtitle: 'SICILIAN-STYLE CHICKEN PARM',
    alt: 'slider image',
  }];
  public galleryStandardImages: galleryStandardImage = [{
    url: '../../assets/images/gallary-2.png',
    alt: 'gallary image',
  }, {
    url: '../../assets/images/gallary-3.png',
    alt: 'gallary image',
  }, {
    url: '../../assets/images/gallary-4.png',
    alt: 'gallary image',
  }, {
    url: '../../assets/images/gallary-5.png',
    alt: 'gallary image',
  }];

  public mediaCompanyLogos: mediaCompanyLogo = [{
    url: '../../assets/images/company-logo-1.png',
    alt: 'logo',
  }, {
    url: '../../assets/images/company-logo-2.png',
    alt: 'logo',
  }, {
    url: '../../assets/images/company-logo-3.png',
    alt: 'logo',
  }, {
    url: '../../assets/images/company-logo-4.png',
    alt: 'logo',
  }, {
    url: '../../assets/images/company-logo-5.png',
    alt: 'logo',
  }, {
    url: '../../assets/images/company-logo-6.png',
    alt: 'logo',
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
}
