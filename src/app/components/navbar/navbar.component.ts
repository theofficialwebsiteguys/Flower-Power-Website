import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthNavComponent, CartIconComponent, LocationDropdownComponent } from 'shop-components';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, CartIconComponent, AuthNavComponent, LocationDropdownComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen: boolean = false;
  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 20;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
  }
}
