import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routePaths } from 'src/constants/routes.constant';
import { AdressComponent } from './components/adress/adress.component';
import { HomeComponent } from './views/home/home.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { VoteComponent } from './components/vote/vote.component';
import { FormComponent } from './views/form/form.component';

export const routes: Routes = [
  { path: routePaths.home.route, component: HomeComponent, pathMatch: 'full' },
  { path: routePaths.form.route, component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
