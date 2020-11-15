import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'psullytutor';
  colredBackground: boolean;
  fbHidden = false;
  fbWidth = '250';

  constructor(router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (['testimonials', 'home', ''].includes(event.url.split('/')[1]))
          this.colredBackground = false;
        else
          this.colredBackground = true;

        if (['contact'].includes(event.url.split('/')[1]))
          this.fbHidden = false;
        else
          this.fbHidden = true;
      }
    });

    this.resizeFbContainer();
  }

  resizeFbContainer() {
    if (this.pageWidth > 1300)
      this.fbWidth = '500';
    else if (this.pageWidth > 1050)
      this.fbWidth = '500';
    else if (this.pageWidth > 750)
      this.fbWidth = '500';
    else if (this.pageWidth > 500)
      this.fbWidth = '250';
    else if (this.pageWidth < 500)
      this.fbWidth = '200';
  }

  get pageWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

}
