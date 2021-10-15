import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routePaths } from 'src/constants/routes.constant';
import { AdressComponent } from './views/adress/adress.component';
import { HomeComponent } from './views/home/home.component';
import { PersonalInfoComponent } from './views/personal-info/personal-info.component';
import { VoteComponent } from './views/vote/vote.component';

export const routes: Routes = [
  { path: routePaths.home.route, component: HomeComponent, pathMatch: 'full' },
  { path: routePaths.home.route, component: HomeComponent, pathMatch: 'full' },
  { path: routePaths.home.route, component: HomeComponent },
  { path: routePaths.personalInfo.route, component: PersonalInfoComponent },
  { path: routePaths.adress.route, component: AdressComponent },
  { path: routePaths.vote.route, component: VoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
