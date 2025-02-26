import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { MarqueeComponent } from '../components/marquee/marquee.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { CategorySectionComponent } from '../components/category-section/category-section.component';

@Component({
  selector: 'app-home',
  imports: [ TopBarComponent, NavbarComponent, HeroComponent, MarqueeComponent, CategorySectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
