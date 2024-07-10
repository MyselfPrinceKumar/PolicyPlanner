import { Component } from '@angular/core';

@Component({
  selector: 'app-discover-the-best',
  templateUrl: './discover-the-best.component.html',
  styleUrls: ['./discover-the-best.component.css']
})
export class DiscoverTheBestComponent {
  showMore1: boolean = false;
  showMore2: boolean = false;
  showMore3: boolean = false;

  toggleShowMore(sectionNumber: number) {
    if (sectionNumber === 1) {
      this.showMore1 = !this.showMore1;
    } else if (sectionNumber === 2) {
      this.showMore2 = !this.showMore2;
    } else if (sectionNumber === 3) {
      this.showMore3 = !this.showMore3;
    }
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-discover-the-best',
//   templateUrl: './discover-the-best.component.html',
//   styleUrls: ['./discover-the-best.component.css']
// })
// export class DiscoverTheBestComponent {
//   showMore: boolean = false;

//   showMore1: boolean = false;
//   showMore2: boolean = false;
//   showMore3: boolean = false;

//   // toggleShowMore(){
//   //   this.showMore = !this.showMore;
//   // }

//   toggleShowMore(sectionNumber: number) {
//     if (sectionNumber === 1) {
//       this.showMore1 = !this.showMore1;
//     } else if (sectionNumber === 2) {
//       this.showMore2 = !this.showMore2;
//     } else if (sectionNumber === 3) {
//       this.showMore3 = !this.showMore3;
//     }
//   }

// }
