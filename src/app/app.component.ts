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
  fbHidden = false;
  fbBig = false;
  fbSmall = false;

  get isSmallShown(){
    if(this.fbHidden === true)
      return false;
    if(this.fbSmall === false)
      return  false;
    return true;
  }

  get isBigShown(){
    if(this.fbHidden === true)
      return false;
    if(this.fbBig === false)
      return  false;
    return true;
  }

  constructor(router: Router) {
    this.resizeFbContainer();
    
    fromEvent(window, 'resize').pipe(debounceTime(300))
      .subscribe(() => this.resizeFbContainer());
      
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
  }

  resizeFbContainer() {
    this.fbBig = false;
    this.fbSmall = false;

    if (this.pageWidth > 700)
      this.fbBig = true;
    else if (this.pageWidth <= 700)
      this.fbSmall = true;
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
