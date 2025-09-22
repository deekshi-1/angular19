import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  form = {
    email: '',
    password: '',
  };
  status: boolean = false;
  submit(data: any) {
    this.status = true;
    if (data.status == 'VALID') alert('success');
    else alert('Form is invalid');
  }
}
