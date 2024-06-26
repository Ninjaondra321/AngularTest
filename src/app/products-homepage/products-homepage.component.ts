import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';


type Product = {
  id: number;
  title: string;
  description: string;
};

@Component({
  selector: 'app-products-homepage',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-homepage.component.html',
  styleUrl: './products-homepage.component.css'
})

export class ProductsHomepageComponent {

  constructor(private router: Router) { }

  
  productsList: Product[] = [];

  searchText:string = "";

  udpateSearchText(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value;

    this.searchText=value;

  }


  closeCard(id: number) {
    this.productsList = this.productsList.filter(product => product.id != id)
    
  }
  
  populateWithProducts() {
    for (let i = 0; i < 6; i++) {
      
      let prodNumber = Math.random()*900000 + 100000 // So that it can be a hex color code
      prodNumber = Math.floor(prodNumber)
      
      this.productsList.push(
        {title: "Product " + prodNumber, description: "Hellou world", id: prodNumber}
      )
    

      
    }
  }

  ngOnInit() {
    this.populateWithProducts();
  }

  search() {
    this.router.navigate(['/products', this.searchText]);
  }
}
