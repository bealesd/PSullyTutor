import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuition',
  templateUrl: './tuition.component.html',
  styleUrls: ['./tuition.component.css']
})
export class TuitionComponent implements OnInit {
  alevel = false;
  beyond: boolean;
  gcseRetake: boolean;
  gcse: boolean;

  constructor() { }

  ngOnInit() {
  }

  showText(evt) {
    const id = evt.target.id;
    if (id === 'alevel')
      this.alevel = !this.alevel;
    else if (id === 'gcse')
      this.gcse = !this.gcse;
    else if (id === 'gcseRetake')
      this.gcseRetake = !this.gcseRetake;
    else if (id === 'beyond')
      this.beyond = !this.beyond;

  }
}
