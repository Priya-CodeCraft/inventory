import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNavbar = true;
  showFooter = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateVisibility(event.url);
      }
    });
  }

  ngOnInit() {
    this.updateVisibility(this.router.url);
  }

  private updateVisibility(url: string) {
    const hiddenRoutes = ['/login', '/register'];
    this.showNavbar = !hiddenRoutes.some(route => url.startsWith(route));
    this.showFooter = !hiddenRoutes.some(route => url.startsWith(route));
  }
}
