import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Currency} from '../../model/currency';
import {ExchangeRateToEUR} from '../../model/exchangeRateToEUR';
import {RatesService} from '../../service/rates.service';

@Component({
  selector: 'app-update-rate',
  providers: [RatesService],
  templateUrl: './update-rate.component.html',
})
export class UpdateRateComponent implements OnInit {
  public id: number;
  public Currency = Currency;
  public exchangeRate: ExchangeRateToEUR = new ExchangeRateToEUR();

  constructor(private route: ActivatedRoute, private router: Router, private ratesService: RatesService) { }

  public ngOnInit(): void {
    this.exchangeRate = new ExchangeRateToEUR();

    this.id = this.route.snapshot.params['id'];

    this.ratesService.getExchangeRateById(this.id)
      .subscribe((data) => {
        console.log(data);
        this.exchangeRate = data;
      }, (error) => console.log(error));
  }

  public onSubmit() {
    this.updateExchangeRate();
  }

  public gotoList() {
    this.router.navigate(['/exchange-rates']);
  }

  public updateExchangeRate() {
    this.ratesService.updateExchangeRate(this.id, this.exchangeRate)
      .subscribe((result) => {
        this.gotoList();
      }, (error) => console.error(error));
    this.exchangeRate = new ExchangeRateToEUR();
  }
}
