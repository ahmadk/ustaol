import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MealShowComponent } from './pages/meal-show/meal-show.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { HowSubscriptionWorksComponent } from './pages/how-subscription-works/how-subscription-works.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
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


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'meal-show', component: MealShowComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'how-subscription-works', component: HowSubscriptionWorksComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'distribution-delivery', component: DistributionDeliveryComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'cancel', component: CancelComponent},
  {path: 'distance-contracts', component: DistanceContractsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'my-menu', component: MyMenuComponent},
  {path: 'my-menu-management', component: MyPlanManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
