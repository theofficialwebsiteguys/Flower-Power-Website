import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-website-layout',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, NavbarComponent, FooterComponent],
  template: `
    <div class="website-root">
      <app-top-bar></app-top-bar>
      <app-navbar></app-navbar>

      <main role="main">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `
})
export class WebsiteLayoutComponent {}
