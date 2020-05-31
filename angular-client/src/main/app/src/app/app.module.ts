import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './components/exchange.component';
import { HomeComponent } from './components/home.component';
import {LoginComponent} from './components/login.component';
import {AddRateComponent} from './pages/add-rate/add-rate.component';
import {UpdateRateComponent} from './pages/update-rate/update-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRateComponent,
    UpdateRateComponent,
    LoginComponent,
    HomeComponent,
    ExchangeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'}], {onSameUrlNavigation: 'reload'}),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
