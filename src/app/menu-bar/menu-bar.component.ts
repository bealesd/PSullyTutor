import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  isModalOpen: boolean;
  modalMessage: string;
  modalValue: string;

  constructor() {
    this.isModalOpen = false;
  }

  ngOnInit() { }

  openNewWindow(link) {
    window.open(link);
  }

  openModal(message, value) {
    this.isModalOpen = true;
    this.modalMessage = message;
    this.modalValue = value;
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalMessage = '';
    this.modalValue = '';
  }

}
