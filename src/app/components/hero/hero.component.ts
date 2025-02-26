import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  images: string[] = [
    'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel1.jpg',
    'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel10.jpg',
    'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel2.jpg',
    'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel3.jpg',
    'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel4.jpg',
    'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel5.jpg',
    'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel6.jpg',
    'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel7.jpg',
    'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel8.jpg',
    'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel9.jpg'
  ];
  currentIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
