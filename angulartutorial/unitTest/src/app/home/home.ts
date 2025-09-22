import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  isPrime(num: any): boolean {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Input type should be number')
    } if (num < 2) {
      throw new Error('Must be greater than 1')
    }
    if (!Number.isInteger(num)) {
      throw new Error('Number must be an integer.');
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
