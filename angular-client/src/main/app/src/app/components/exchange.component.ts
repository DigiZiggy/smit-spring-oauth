import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ExchangeRateToEUR} from '../model/exchangeRateToEUR';
import {User} from '../model/user';
import {AppService} from '../service/app.service';
import {RatesService} from '../service/rates.service';

@Component({
  selector: 'app-exchange-rates',
  providers: [AppService, RatesService],
  template: `
    <div class="container">
      <h1 class="col-sm-12" style="margin-bottom: 40px; padding-left: 0">Exchange Rates to EUR</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Rate</th>
            <th>Currency</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let exchangeRate of exchangeRates">
            <td>{{ exchangeRate.rate }}</td>
            <td>{{ exchangeRate.currency }}</td>
            <td *ngIf="isAdmin">
              <button (click)="deleteRate(exchangeRate.id)" class="btn btn-danger">Delete</button>
              <button (click)="updateRate(exchangeRate.id)" class="btn btn-primary" style="margin-left: 10px">Edit</button>
            </td>
          </tr>
        </tbody>
        <div *ngIf="isAdmin">
          <button (click)="addRate()" routerLink="/add" class="btn btn-success" style="margin-top: 50px">Add new rate</button>
        </div>
        <router-outlet></router-outlet>
      </table>
    </div>
  `,
})

export class ExchangeComponent implements OnInit {
  public exchangeRates: ExchangeRateToEUR[];
  public isAdmin = false;
  public username: string;
  public user: User;
  private userRolesUrl = 'http://localhost:8081/resource-server/api/v1/user/';
  private exchangeRatesUrl = 'http://localhost:8081/resource-server/api/v1/exchange-rates-to-EUR/';
  private userUrl = 'http://localhost:8081/resource-server/api/v1/user/info';

  constructor(private appService: AppService, private rateService: RatesService, private router: Router) {
  }

  public ngOnInit() {
    this.reloadData();
    this.getUserRoles();
  }

  public reloadData() {
    this.appService.getResource(this.exchangeRatesUrl)
      .subscribe( (data) => {
        this.exchangeRates = data;
        console.log(data);
      });
  }

  public getExchangeRate() {
        this.appService.getResource(this.exchangeRatesUrl)
         .subscribe((data) => this.exchangeRates = data);
  }

  public getUserRoles() {
    this.appService.getResource(this.userUrl)
      .subscribe( (data) => {
        this.username = data['user_name'];
        this.checkIfAdmin(data['user_name']);
      }, (error) => console.log(error));
  }

  public checkIfAdmin(userName) {
    this.appService.getResource(this.userRolesUrl + userName)
      .subscribe( (data) => {
        this.user = data;
        for (let i = 0; i < this.user.roles.length; i++) {
          if (this.user.roles[i]['name'] === 'admin') {
            this.isAdmin = true;
          }
        }
      });
  }

  public deleteRate(id: number) {
    this.rateService.deleteExchangeRate(id)
      .subscribe(
        (data) => {
          this.reloadData();
        },
        (error) => console.log(error));
  }

  public addRate(){
    this.router.navigate(['add']);
  }

  public updateRate(id: number){
    this.router.navigate(['update', id]);
  }
}
