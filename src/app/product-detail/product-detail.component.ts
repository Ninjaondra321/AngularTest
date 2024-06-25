import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  productName?: string = undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // Fetch the route parameters
      this.productName = "" + params.get('productName'); // Use + to convert string to number
  
      // Use these parameters to fetch data or perform actions
    });
  }
  
}
