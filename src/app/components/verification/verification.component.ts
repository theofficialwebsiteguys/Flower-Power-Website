import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { LocationSelectionComponent } from 'shop-components';

@Component({
  selector: 'app-verification',
  imports: [CommonModule, LocationSelectionComponent],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent {
  @Output() verificationComplete = new EventEmitter<void>();
  showAgeVerification = false;
  showLocationSelection = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const isVerified = localStorage.getItem('isAgeVerified');
    if (!isVerified) {
      this.showAgeVerification = true;
      this.disableScrolling();
    }
  }

  disableScrolling() {
    this.renderer.addClass(document.body, 'no-scroll');
  }

  enableScrolling() {
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  onYesClick() {
    // localStorage.setItem('isAgeVerified', 'true');
    // this.showAgeVerification = false;
    // this.enableScrolling();
    // this.verificationComplete.emit(); // Notify parent component
       this.showLocationSelection = true;
  }

  onNoClick() {
    alert('Sorry, you must be over 21 to enter.');
    // Optionally redirect them away
    window.location.href = 'https://www.google.com';
  }

  onLocationChosen(location: any) {
    localStorage.setItem('isAgeVerified', 'true');
    this.showAgeVerification = false;
    this.showLocationSelection = false;
    this.enableScrolling();
    this.verificationComplete.emit();
  }
}
