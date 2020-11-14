import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  testimonialTexts = [
    'I am delighted to report I got a B Grade for Maths. A BIG THANK YOU! to you all',
    'Our daughter gained her result in the end of term tests for maths which she received a 7c, her target was a 5a.We were all very pleased!! Many thanks',
    'I just wanted to say thank you for your teaching & patience with our daughter. She did a lot of revision and extra lessons and it has paid off with a grade B @ A level.',
    'Thought I would let you know I got an overall B in my maths A level, I passed every paper with a B as well… even mechanics! Thank you so much for the past few years I couldn’t have done it without your help!',
    'Our son never moans about going to his lesson and seems to really enjoy it which is great. Please could he come every week, he has found the lessons useful already.',
    'I passed, I got the C grade I needed 😊 Thank you very much for all your help! Couldn’t have done it without the lessons I had from you!',
    'They (the twins) both got A grade GCSE thanks We are very pleased. Thank you for your help.',
    'I would like to thank you for your patience and excellent teaching skills – our daughter’s confidence and knowledge has come on leaps and bounds. She no longer dreads her maths exam so fingers crossed she achieves the deserved result.',
    'Your tuition has been exceptional and there has never been a question or problem that you could not answer or explain. You are very kind and down to earth and tailor our daughter’s tuition according to her needs on a one-to-one basis, whilst encouraging independent thought and effort. It is a combination that works well and my daughter now feels confident and is very well supported in her mathematics studies. We would both like to thank you very much for all your help encouragement and advice during the last few months.',
    'Just a quick note to let you know my son got a B in his exams. It means he got a place at college doing maths, product design and double engineering. We might be in touch if he needs some extra tuition for engineering. Thank you all for the help and encouragement you gave him and thank you for fitting him in and all your help.',
    'We are really happy with our daughter’s progress. She did a Maths mock on Tuesday and was told yesterday that she had got a C but she did leave quite a few questions out, and after her lesson on Tuesday evening with you, she said that you had covered everything in the exam that she could not answer, so hopefully will do even better with the exam next time. She is really enjoying her lessons.'
  ]

  shorttestimonialTexts = [];
  textHeight = 200;

  constructor() {
    fromEvent(window, 'resize').pipe(debounceTime(300))
      .subscribe(() => this.trimText());
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.trimText()
  }

  trimText() {
    const test = document.querySelectorAll('.testimonial-text > div') as any;
    [...test].forEach((el, i) => {
      const div = el as HTMLDivElement;
      if (div.innerText.slice(0, -3) === '...')
        div.innerText = this.testimonialTexts[i];

      let height = (div.clientHeight + 1);
      let firstRun = true;
      while (height > this.textHeight) {
        if (firstRun) {
          div.innerText += '...';
          firstRun = false;
        }

        div.innerText = div.innerText.slice(0, -3).slice(0, -1) + '...'
        height = (div.clientHeight + 1);
      }
      this.shorttestimonialTexts.push(div.innerText);
    })
  }

  expand(evt, i) {
    let div = evt.target as HTMLDivElement;

    let height = (div.clientHeight + 1);
    if (height < this.textHeight)
      div.innerText = this.testimonialTexts[i];
    else
      div.innerText = this.shorttestimonialTexts[i];
  }
}
