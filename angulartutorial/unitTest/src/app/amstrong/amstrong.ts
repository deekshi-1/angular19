import { Component } from '@angular/core';

@Component({
  selector: 'app-amstrong',
  imports: [],
  templateUrl: './amstrong.html',
  styleUrl: './amstrong.css'
})
export class Amstrong {
  isArmstrongNumber(num: number): boolean {
    if (num < 0) {
      return false;
    }

    let originalNumber = num;
    let sum = 0;
    let digitsCount = Math.floor(Math.log10(num) + 1);

    while (num > 0) {
      let digit = num % 10;
      sum += Math.pow(digit, digitsCount);
      num = Math.floor(num / 10);
    }

    return sum === originalNumber;
  }
}
