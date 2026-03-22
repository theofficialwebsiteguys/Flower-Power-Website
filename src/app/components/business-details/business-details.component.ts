import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-business-details',
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './business-details.component.html',
  styleUrl: './business-details.component.scss'
})
export class BusinessDetailsComponent {
  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild('mapWrapper', { static: false }) mapWrapper!: ElementRef;

  latitude = 40.77273; // Replace with actual latitude
  longitude = -73.97990; // Replace with actual longitude
  zoom = 14;


    constructor(private sanitizer: DomSanitizer) {}

  locations: any[] = [];

  ngOnInit() {
    this.locations = [
      {
        name: 'Upper West Side – Manhattan',
        address: '22 West 66th Street, New York, NY 10023',
        mapLink: 'https://maps.app.goo.gl/JgG9MjZAtc1yQ9ZT7',
        mapEmbed: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497729.6287532551!2d-74.17185191330839!3d41.081455377843014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259262632ec69%3A0x9955e395ded03b45!2sFlower%20Power%20Dispensers!5e1!3m2!1sen!2sus!4v1766082826990!5m2!1sen!2sus'
        ),
        phone: '6469160491',
        phoneDisplay: '(646) 916-0491',
        payments: 'Cash, Debit Card & AeroPay',
        hours: [
          'Mon–Thu: 8:00 AM – 10:00 PM',
          'Friday: 8:00 AM – 11:00 PM',
          'Saturday: 10:00 AM – 11:00 PM',
          'Sunday: 11:00 AM – 9:00 PM'
        ]
      },
      {
        name: 'Maspeth – Queens',
        address: '71-10 Grand Ave, Maspeth, NY 11378',
        mapLink: 'https://maps.app.goo.gl/AFbTU8NPJ4XUNWYCA',
        mapEmbed: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497729.6287532551!2d-74.17185191330839!3d41.081455377843014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f0056795f75%3A0xc35d21c471e288b5!2sFlower%20Power%20Dispensers%20-%20Maspeth!5e1!3m2!1sen!2sus!4v1766083008723!5m2!1sen!2sus'
        ),
        phone: '7182556915',
        phoneDisplay: '(718) 255-6915',
        payments: 'Cash, Debit Card & AeroPay',
        hours: [
          'Every Day: 12:00 PM – 8:00 PM'
        ]
      }
    ];
  }
}
