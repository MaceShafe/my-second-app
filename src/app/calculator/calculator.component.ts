import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  x = 0;
  input1 = 0;
  input2 = 0;
  input3 = 1;
  answer:number;
  mathSymbol = " ";

  addition() {
    this.x = this.input1+this.input2;
    this.x = (Math.pow(this.x, this.input3));
    this.answer = this.x;

    this.mathSymbol="+"
  }

  subtraction() {
    this.x = this.input1-this.input2;
    this.x = (Math.pow(this.x, this.input3));    
    this.answer = this.x;

  this.mathSymbol="-"

  }

  multiplication() {
    this.x = this.input1*this.input2;
    this.x = (Math.pow(this.x, this.input3));
    this.answer = this.x;

    this.mathSymbol="X"

  }

  divide(){
    this.x = this.input1/this.input2;
    this.x = (Math.pow(this.x, this.input3));    
    this.answer = this.x;
    this.mathSymbol="/"

  }

  changeVariables() {
    let num1=this.input1;
    let num2=this.input2;


    this.input1=num2;
    this.input2=num1;
  }


}
