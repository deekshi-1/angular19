import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name!: string;
  email!: string;
  number!: string;
  message!: string;
  submit() {
    console.log('Name-', this.name);
    console.log('Email-', this.email);
    console.log('Num-', this.number);
    console.log('Nessage-', this.message);
  }
}
