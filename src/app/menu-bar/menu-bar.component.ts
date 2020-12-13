import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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

  constructor(private router: Router) {
    this.isModalOpen = false;

    // this.router.events.subscribe((val) => {
    //   if (val instanceof NavigationEnd) {
    //     if (document.querySelectorAll('.link-container .active-link').length === 0) 
    //       document.querySelector('.menu-link.home').classList.add('active-link');
    //     else 
    //       document.querySelector('.menu-link.home').classList.remove('active-link');
    //   }
    // })
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
