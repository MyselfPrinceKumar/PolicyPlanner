import { Component } from '@angular/core';

interface Product {
  name: string;
  expanded: boolean;
  subProducts: string[];
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  products: Product[] = [
    {
      name: 'SME Insurance',
      expanded: false,
      subProducts: ['Group Health Insurance', 'Cyber Insurance','D&O Insurance','Worker Compensation']
    },
    {
      name: 'Motor Insurance',
      expanded: false,
      subProducts: ['Car Insurance', 'Bike Insurance']
    },
    {
      name: 'Health Insurance',
      expanded: false,
      subProducts: ['Family Health Insurance', 'SParents Health insurance','Indivisual Health Insurance','']
    },
    {
      name: 'Term Insurance',
      expanded: false,
      subProducts: ['Family Health Insurance', 'SParents Health insurance','Indivisual Health Insurance','']
    },
    {
      name: 'Saving Plan',
      expanded: false,
      subProducts: ['Family Health Insurance', 'SParents Health insurance','Indivisual Health Insurance','']
    },
    {
      name: 'Travel Insurance',
      expanded: false,
      subProducts: ['Family Health Insurance', 'SParents Health insurance','Indivisual Health Insurance','']
    },
  ];

  toggleSubItems(product: Product): void {
    product.expanded = !product.expanded;
  }
}
