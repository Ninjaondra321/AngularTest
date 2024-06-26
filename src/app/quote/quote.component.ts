import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {

  quote = undefined;

  ngOnInit() {

    fetch("https://api.quotable.io/random")
    .then(resp => resp.json())
    .then(data => data.content)
    .then(content => content.trim())
    .then (content => this.quote = content)
  
  }


}
