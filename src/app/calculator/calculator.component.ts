import { Component } from '@angular/core';



@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  
})

export class CalculatorComponent {

  operators: string[] = ["+", "-", "*", "/"];

  number1: number = 0;
  number2: number = 0;
  selectedOperator = "+";
  result?: number = undefined;

  updateValue(event: Event) {
    const element = event.target as HTMLInputElement;
    const value =  element.value

    switch (element.id) {
      case "numberInput1":
        this.number1 =  parseFloat(value);
        break;
      case "numberInput2":
        this.number2 =  parseFloat(value);
        break;

      case "operatorSelect":
        this.selectedOperator = value;
        break;

      default:
        console.error("Id was not found, or it wasn't paired to any variable")
        break;
    }


  }

  calculate() {
    this.result = 15;
    
    switch(this.selectedOperator) {
      case "+":
        this.result = this.number1 + this.number2;
        return;
      case "-":
        this.result = this.number1 - this.number2;
        return;
      case "*":
        this.result = this.number1 * this.number2;
        return;
      case "/":
        this.result = this.number1 / this.number2;
        return;
    }
  }

}
