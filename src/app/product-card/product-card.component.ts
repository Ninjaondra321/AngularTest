import { Component, Input, ElementRef , Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(private elementRef: ElementRef) {}

  bgColor:string = "0";
  @Input() id!: number;
  @Input() productName: string = "Default productName";
  @Input() productDescription: string = "Default description";
  // @Input() closeCard: Function = () => {};
  @Output() closeCard = new EventEmitter<number>();
  
  ngOnInit() {
    this.bgColor = "#" + this.id;

  }


  
  onClose() {
    this.closeCard.emit(this.id);
  }

}
