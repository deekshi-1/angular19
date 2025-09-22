import { Component } from '@angular/core';
import { DataService } from '../../servicess/data-service';
import { Employee } from '../../interface/employee';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  confirmPassword: string = '';
  user: Employee = {
    name: '',
    phone: '',
    email: '',
    password: '',
    role: 'employee'
  };

  constructor(private dataService: DataService, private router: Router) { }

  submit() {
    if (this.user.name.length < 2) {
      alert('Name too short');
    } else {
      if (this.user.phone.length != 10) {
        alert('Number should be 10 digits');
      } else {
        this.dataService.findUserExist(this.user.email).subscribe((item) => {
          if (item.length) alert('User already exist');
          else {
            if (this.user.password === this.confirmPassword) {
              this.dataService.register(this.user).subscribe((item) => {
                alert("user added")

                this.user = {
                  name: '',
                  phone: '',
                  email: '',
                  password: '',
                  role: 'employee'
                };
              });
            } else {
              alert('Password mismatch');
            }
          }
        });
      }
    }
  }

  login() {
    this.router.navigate(['login'])
  }
}
