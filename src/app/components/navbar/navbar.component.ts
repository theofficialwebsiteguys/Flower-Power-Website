import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
