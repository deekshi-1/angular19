import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../services/user/user-services';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { firstValueFrom } from 'rxjs';
import { BankingServices } from '../../services/banking/banking-services';

@Component({
  selector: 'app-credit',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './credit.html',
  styleUrl: './credit.css'
})
export class Credit implements OnInit {
  accNo: number = 0;
  inputform: FormGroup = new FormGroup({
    amount: new FormControl(0, [Validators.required]),
  });

  constructor(private userService: UserServices, private transService: BankingServices) { }

  ngOnInit(): void {
    const value = localStorage.getItem('user');
    this.accNo = value ? JSON.parse(value) : 0;
  }

  async submit(event: Event) {
    try {
      event.preventDefault();
      const amount = this.inputform.get('amount')?.value;
      const user = (await firstValueFrom(this.userService.checkAcc(this.accNo)))[0]
      if (amount === 0) {
        alert("Input amount is 0")
        return
      }

      let response1 = (await firstValueFrom(this.userService.update(user.id, { "balance": user.balance + amount })))
      console.log("one", response1);

      let response3 = (await firstValueFrom(this.transService.addTransaction(user.accNo, user.accNo, user.firstName, amount)))
      console.log("one", response3);
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong during registration');
    }
  }
}
