
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourpartnerscards',
  templateUrl: './ourpartnerscards.component.html',
  styleUrls: ['./ourpartnerscards.component.css']
})
export class OurpartnerscardsComponent implements OnInit {

  activeTab: string = 'life'; // Default active tab
  containt: string = 'life'; // Default content to show
  first_number = 0;

  constructor() { }

  ngOnInit(): void {
    this.incrementNumber()
  }

  incrementNumber() {
    const interval = setInterval(() => {
      if (this.first_number < 100) {
        this.first_number++;
      } else {
        clearInterval(interval);
      }
    }, 10);
  }
  
  switchTab(tab: string) {
    this.activeTab = tab;
    this.containt = tab; // Update containt to match the active tab
  }
}
