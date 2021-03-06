import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  newline = '%0D%0A';
  fbWidth = '250';
  fbNode = document.querySelector('.fb-container');

  constructor() { }

  ngOnInit() {
      // document.querySelector('.contact-container').appendChild(this.fbNode);
  }

  ngOnDestroy(){
    // document.querySelector('.component-container').appendChild(this.fbNode);
  }

  get body() {
    const name = (<any>document.querySelector('#name')).value;
    const message = (<any>document.querySelector('#message')).value;
    if (message.length === 0 || name.length === 0) {
      alert('Form incomplete!');
      return '';
    }

    return `Name: ${name}.${this.newline}${this.newline}Message: ${message}.`;
  }

  reset() {
    (<any>document.querySelector('#message')).value = '';
    (<any>document.querySelector('#name')).value = '';
  }

  send() {
    const body = this.body;
    if (body === '')
      return;
    window.location.href = `mailto:phylsully@blueyonder.co.uk?subject=Email from PSullyLtd.com&body=${body}`;
  }

  showEmail() {
    alert('phylsully@blueyonder.co.uk');
  }

  openNewWindow(link) {
    window.open(link);
  }

}
