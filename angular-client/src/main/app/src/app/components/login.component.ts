import {Component, OnInit} from '@angular/core';
import {AppService} from '../service/app.service';

@Component({
    selector: 'app-login',
    providers: [AppService],
  template: `
    <button *ngIf="!isLoggedIn" class="btn btn-primary navbar-btn" (click)="login()" type="submit">Login</button>
    <a *ngIf="isLoggedIn" class="btn btn-default navbar-btn"(click)="logout()" href="#">Logout</a>
    `,
})

export class LoginComponent implements OnInit {
    public isLoggedIn = false;

    constructor(private appService: AppService){}

    public ngOnInit() {
        this.isLoggedIn = this.appService.checkCredentials();
        let i = window.location.href.indexOf('code');
        if (!this.isLoggedIn && i !== -1) {
            this.appService.retrieveToken(window.location.href.substring(i + 5));
        }
    }

    public login() {
        window.location.href = 'http://localhost:8083/auth/realms/smit/protocol/openid-connect/auth?response_type=code&&scope=write%20read&client_id=' +
        this.appService.clientId + '&redirect_uri='+ this.appService.redirectUri;
    }

    public logout() {
        this.appService.logout();
    }
}
