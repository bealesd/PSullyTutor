import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // (<HTMLElement>document.querySelector('.routed-component')).style.backgroundColor = 'transparent';


    var fontSize = 14;
    var test = document.querySelectorAll('.testimonial-text > div') as any;
    [...test].forEach((el) => {
      const div = el as HTMLDivElement;
      div.style.fontSize = `${fontSize}`;
      var height = (div.clientHeight + 1);
      while (height > 200) {
        div.innerText = div.innerText.slice(0, -1);
      }
    })

    // test.style.fontSize = `${fontSize}`;
    // var height = (test.clientHeight + 1);
    // if(height > 200){

    // }

  }

}
