import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MealShowComponent } from './pages/meal-show/meal-show.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { HowSubscriptionWorksComponent } from './pages/how-subscription-works/how-subscription-works.component';
import { FaqComponent } from './pages/faq/faq.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'meal-show', component: MealShowComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'how-subscription-works', component: HowSubscriptionWorksComponent},
  {path: 'faq', component: FaqComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
