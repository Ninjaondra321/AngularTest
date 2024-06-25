import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-duplicator',
  standalone: true,
  imports: [],
  templateUrl: './duplicator.component.html',
  styleUrl: './duplicator.component.css'
})
export class DuplicatorComponent {
  napis: string = "";
  cislo?: number = undefined;


  updateNapis(event: Event) {

    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    this.napis = inputValue;
  
  } 

  updateMyNumber(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    this.cislo = Number.parseFloat(inputValue);
  }

}
