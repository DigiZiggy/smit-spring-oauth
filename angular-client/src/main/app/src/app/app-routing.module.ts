import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExchangeComponent} from './components/exchange.component';
import {AddRateComponent} from './pages/add-rate/add-rate.component';
import {UpdateRateComponent} from './pages/update-rate/update-rate.component';

const routes: Routes = [
  { path: 'add', component: AddRateComponent },
  { path: 'update/:id', component: UpdateRateComponent },
  { path: 'exchange-rates', component: ExchangeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
