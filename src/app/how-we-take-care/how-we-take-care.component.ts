
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-how-we-take-care',
  templateUrl: './how-we-take-care.component.html',
  styleUrls: ['./how-we-take-care.component.css']
})
export class HowWeTakeCareComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  items = [
    {
      heading: 'Your Hassle-Free Policy Guide',
      text: 'Our planning does all the hard work for you: we read between the lines, decode the terms and conditions, and help you purchase the best policy suitable for your requirements.',
      image: '../../assets//Caruser_1.svg'
    },
    {
      heading: 'Your Data, Safely Guarded',
      text: "Your data is private and stored in govt. approved data centers. We don't sell it to anyone, nor will we ever share it without your consent.",
      image: '../../assets//Caruser_2.svg'
    },
    {
      heading: 'Best Rates Assured',
      text: 'Policy Planner brings you personalized quotes from top insurance companies in India, offering a wide range of plans with competitive premiums to meet your needs.',
      image: '../../assets//Caruser_3.svg'
    },
    {
      heading: 'Claim Help, Step-by-Step',
      text: "Policy Planner provides step-by-step guidance on claim processes for various plans, but the insurance company's claims team manages settlement and disbursement.",
      image: '../../assets/Caruser__4.svg'
    }
  ];

  private intervalId: any;

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  navigateTo(index: number) {
    this.currentIndex = index;
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }, 2000); // Change slide every 2 seconds
  }

  stopAutoScroll() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

