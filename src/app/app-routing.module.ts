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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
