import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReviewsService } from '../../reviews.service';
import { BannersService } from '../../banners.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() singleImage: string | null = null; // Image for static pages
  @Input() title: string = " "; // Dynamic Title
  @Input() subtitle: string = "Premium Recreational Cannabis Dispensary.<br>Order now for pickup or FREE delivery today."; // Dynamic Subtitle
  @Input() buttons: { text: string; class: string; link?: string }[] = [
    { text: "Shop", class: "btn-primary", link: "/shop" },
    { text: "Mobile App", class: "btn-secondary", link: "/loyalty"  }
  ];
  @Input() heroHeight: string = '60vh'; // Default height for main pages

  
  // images: string[] = [
  //   'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel10.jpg',
  //   'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel3.jpg',
  //   'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel4.jpg',
  //   'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel5.jpg',
  //   'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel6.jpg',
  //   'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel7.jpg',
  //   'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel8.jpg',
  //   'https://storage.googleapis.com/the-website-guys/Flower-Power/carousel9.jpg'
  // ];
  banners: { image: string; title: string; description: string }[] = [];
  currentIndex: number = 0;
  intervalId: any;

  constructor(private bannersService: BannersService){}

  ngOnInit(): void {
    if (!this.singleImage) {
      // If no single image is provided, start the carousel
      this.loadCarouselImages();
      this.startCarousel();
    }
  }

  loadCarouselImages() {
    this.bannersService.getCarouselImages().subscribe(
      response => {
        console.log(response)
        this.banners = response.images.map((imgUrl, index) => ({
          image: `${imgUrl}?v=${new Date().getTime()}`,
          title: `Carousel Image ${index + 1}`,
          description: 'Flower Power Dispensary',
        }));
        console.log(this.banners)
      },
      error => {
        console.error('Error fetching carousel images:', error);
      }
    );
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  get backgroundImage(): string {
    if (this.singleImage) {
      return this.singleImage;
    }

    if (!this.banners.length) {
      return ''; // or a default hero image
    }

    return this.banners[this.currentIndex]?.image ?? '';
  }

}
