import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatDialogModule, MatInputModule, MatStepperModule } from '@angular/material';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CallToActionFooterComponent } from './call-to-action-footer/call-to-action-footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MealShowComponent } from './pages/meal-show/meal-show.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { HowSubscriptionWorksComponent } from './pages/how-subscription-works/how-subscription-works.component';
import { CtaComponent } from './components/cta/cta.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { FaqComponent } from './components/faq/faq.component';
import { DistributionDeliveryComponent } from './pages/distribution-delivery/distribution-delivery.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CancelComponent } from './pages/cancel/cancel.component';
import { DistanceContractsComponent } from './pages/distance-contracts/distance-contracts.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MyMenuComponent } from './pages/my-menu/my-menu.component';
import { MyPlanManagementComponent } from './pages/my-plan-management/my-plan-management.component';
import { MyPlanSkipComponent } from './pages/my-plan-skip/my-plan-skip.component';
import { ParallaxDirective } from './directive/parallax.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    CallToActionFooterComponent,
    MenuItemComponent,
    MenuComponent,
    MealShowComponent,
    HowItWorksComponent,
    HowSubscriptionWorksComponent,
    CtaComponent,
    FaqsComponent,
    FaqComponent,
    DistributionDeliveryComponent,
    EditProfileComponent,
    RegisterComponent,
    TermsComponent,
    CancelComponent,
    DistanceContractsComponent,
    LoginComponent,
    AboutUsComponent,
    MyMenuComponent,
    MyPlanManagementComponent,
    MyPlanSkipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
