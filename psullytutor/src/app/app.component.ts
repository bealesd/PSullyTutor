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

  constructor(router:Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if (['testimonials', 'home'].includes(event.url.split('/')[1]))
          this.colredBackground = false;
        else
          this.colredBackground = true;
      }
    });
  }

}
