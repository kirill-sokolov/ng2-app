import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DataService} from './services/data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {AddCarComponent} from './add-car/add-car.component';
import {BackgroundDirective} from './directives/background.directive';
import {SwitchComponent} from './switch/switch.component';
import {GoalsComponent} from './goals/goals.component';
import {PipesComponent} from './pipes/pipes.component';
import {PowPipe} from './pipes/pow.pipe';
import {CarFilterPipe} from './pipes/car-filter.pipe';
import {ConsoleService} from "./services/console.service";
import {MyFormsComponent} from './my-forms/my-forms.component';
import {TemplateFormsComponent} from './template-forms/template-forms.component';
import {MyHttpComponent} from './my-http/my-http.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    BackgroundDirective,
    SwitchComponent,
    GoalsComponent,
    PipesComponent,
    PowPipe,
    CarFilterPipe,
    MyFormsComponent,
    TemplateFormsComponent,
    MyHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
