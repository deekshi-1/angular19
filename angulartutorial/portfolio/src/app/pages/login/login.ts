import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../../services/login/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatIcon, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;
  hide: Boolean = true;
  value: boolean = false;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private logService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true
    this.logService.checkLogin(this.loginForm.value).subscribe(res => {
      if (res.length) {
        localStorage.setItem('role', 'admin')
        this.value = true
        this.submitted = false; alert("login sucessfull");
        this.router.navigate(['/home'])
      } else this.value = true  ;
    })
  }
}
