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
  isModalBigOpen: boolean;
  modalBigMessage: any;
  modalBigValue: any;

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

  openModalBig(message, value) {
    this.isModalBigOpen = true;
    this.modalBigMessage = message;
    this.modalBigValue = value;
  }

  closeModalBig() {
    this.isModalBigOpen = false;
    this.modalBigMessage = '';
    this.modalBigValue = '';
  }

}
