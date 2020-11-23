import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'psullytutor';
  colredBackground: boolean;
  isfbHidden = true;

  constructor(router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (['testimonials', 'home', ''].includes(event.url.split('/')[1]))
          this.colredBackground = false;
        else
          this.colredBackground = true;

        if (['contact'].includes(event.url.split('/')[1]))
          this.isfbHidden = false;
        else
          this.isfbHidden = true;
      }
    });
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
