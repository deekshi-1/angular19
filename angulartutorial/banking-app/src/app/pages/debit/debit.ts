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
  selector: 'app-debit',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './debit.html',
  styleUrl: './debit.css'
})
export class Debit {
  accNo: number = 0;
  inputform: FormGroup = new FormGroup({
    accNo: new FormControl('', [Validators.required, Validators.minLength(10),
    Validators.maxLength(10)]),
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
      const recAccNo = this.inputform.get('accNo')?.value;
      const amount = this.inputform.get('amount')?.value;
      if (this.accNo == recAccNo) {
        alert('Cant transfer to same account')
        return;
      }
      let response = (await firstValueFrom(this.userService.checkAcc(recAccNo)));
      if (!response.length) {
        alert('Account doesnt exist')
        return;
      }
      const recieverAcc = response[0];

      const user = (await firstValueFrom(this.userService.checkAcc(this.accNo)))[0]
      if (amount === 0) {
        alert("IInput is 0")
        return
      }
      if (user.balance < amount) {
        alert("Insuffitent balance")
        return
      }
      let response1 = (await firstValueFrom(this.userService.update(user.id, { "balance": user.balance - amount })))
      console.log("one", response1);

      let response2 = (await firstValueFrom(this.userService.update(recieverAcc.id, { "balance": recieverAcc.balance + amount })));
      console.log("one", response2);

      let response3 = (await firstValueFrom(this.transService.addTransaction(user.accNo, recieverAcc.accNo, recieverAcc.firstName, amount)))
      console.log("one", response3);
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong during registration');
    }
  }
}
