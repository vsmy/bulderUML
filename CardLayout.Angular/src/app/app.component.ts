import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  /* tslint:disable */
  template: `
    <div class="db-container">
      <router-outlet></router-outlet>
    </div>
  `,
  /* tslint:enable */
})

export class AppComponent { }