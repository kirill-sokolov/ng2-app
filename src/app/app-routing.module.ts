import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CarsComponent} from "./cars/cars.component";
import {GoalsComponent} from "./goals/goals.component";
import {PipesComponent} from "./pipes/pipes.component";
import {MyFormsComponent} from "./my-forms/my-forms.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'goals',
    component: GoalsComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'pipes',
    component: PipesComponent
  }, {
    path: 'home/:id',
    component: HomeComponent
  }, {
    path: 'cars',
    component: CarsComponent
  }, {
    path: 'forms',
    component: MyFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
