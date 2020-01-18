import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MealShowComponent } from './pages/meal-show/meal-show.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'meal-show', component: MealShowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
