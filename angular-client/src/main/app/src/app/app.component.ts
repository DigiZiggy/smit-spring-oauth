import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <nav class="navbar navbar-default">
        <div class="container-fluid">

          <div class="navbar-header">
            <a class="navbar-brand" href="/">SMiT App</a>
          </div>

          <app-login class="pull-right"></app-login>

        </div>
      </nav>
      <router-outlet></router-outlet>`,
})

export class AppComponent {}
