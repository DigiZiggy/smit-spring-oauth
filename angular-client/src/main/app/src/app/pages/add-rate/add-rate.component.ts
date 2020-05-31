import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Currency} from '../../model/currency';
import {ExchangeRateToEUR} from '../../model/exchangeRateToEUR';
import {AppService} from '../../service/app.service';
import {RatesService} from '../../service/rates.service';

@Component({
  selector: 'app-add-rate',
  providers: [RatesService],
  templateUrl: './add-rate.component.html',
})
export class AddRateComponent implements OnInit {
  public exchangeRate: ExchangeRateToEUR = new ExchangeRateToEUR();
  public Currency = Currency;
  public submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private ratesService: RatesService) {
    this.exchangeRate = new ExchangeRateToEUR();
  }

  public ngOnInit() {
  }

  public onSubmit() {
    this.submitted = true;
    this.ratesService.createExchangeRate(this.exchangeRate).subscribe(
      (result) => {
        console.log(result);
        this.gotoList();
      }, (error) => console.error(error));

    this.exchangeRate = new ExchangeRateToEUR();
  }

  public gotoList() {
    this.router.navigate(['exchange-rates']);
  }
}
