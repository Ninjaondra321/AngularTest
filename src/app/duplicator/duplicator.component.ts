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


  updateNapis(event: Event) {
    
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    console.log('Input value:', inputValue);

    this.napis = inputValue;


    // console.log(event.target.value);
    // this.napis = String(targetInput);
  } 

}
