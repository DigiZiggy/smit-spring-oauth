import {Component, OnInit} from '@angular/core';
import {AppService} from '../service/app.service';

@Component({
    selector: 'app-home-header',
    providers: [AppService],
  template: `
    <div class="container" >
      <div *ngIf="isLoggedIn" class="content">
          <br/>
          <app-exchange-rates></app-exchange-rates>
      </div>
    </div>`,
})

export class HomeComponent implements OnInit {
  private userUrl = 'http://localhost:8081/resource-server/api/v1/user/info';
  public isLoggedIn = false;

  constructor(private appService: AppService){}

  public ngOnInit() {
    this.isLoggedIn = this.appService.checkCredentials();
    const i = window.location.href.indexOf('code');
    if (!this.isLoggedIn && i !== -1) {
        this.appService.retrieveToken(window.location.href.substring(i + 5));
    }
  }
}
