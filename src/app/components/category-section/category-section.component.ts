import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-section',
  imports: [CommonModule],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.scss'
})
export class CategorySectionComponent {
  categories = [
    {
      name: 'Edibles',
      image: '/assets/categories/edibles.jpg'
    },
    {
      name: 'Flower',
      image: '/assets/categories/flower.jpg'
    },
    {
      name: 'Pre-Rolls',
      image: '/assets/categories/pre-rolls.jpg'
    },
    {
      name: 'Concentrates',
      image: '/assets/categories/concentrates.jpg'
    }
  ];
}
