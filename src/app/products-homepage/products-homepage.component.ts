import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-homepage',
  standalone: true,
  imports: [],
  templateUrl: './products-homepage.component.html',
  styleUrl: './products-homepage.component.css'
})
export class ProductsHomepageComponent {

  constructor(private router: Router) { }


  searchText:string = "";

  udpateSearchText(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value;

    this.searchText=value;

  }




  search() {
    
    
    this.router.navigate(['/products', this.searchText]);

  }
}
