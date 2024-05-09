import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private router: Router) { }
  showMoreInfo = false;

  seeMoreButton() {
    this.showMoreInfo = !this.showMoreInfo;
    console.log('Button clicked');
  }

  redirectToPage() {
    this.router.navigate(['/campaign']);
  }

}
