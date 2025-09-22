import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.userForm = this.fb.group(
      {
        fName: this.fb.control('', Validators.required),
        lName: this.fb.control('', Validators.required),
        email: this.fb.control('', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}')]),
        phone: this.fb.array([
          this.fb.control('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
        ]),
        subscribe: this.fb.control(false),
        password: this.fb.control('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ]),
        confirmPassword: this.fb.control('', Validators.required),
      },
      {
        validators: this.checkPassword(),
      }
    );
    this.userForm.get('subscribe')?.valueChanges.subscribe((subscribed: boolean) => {
      const emailControl = this.userForm.get('email');
      if (subscribed) {
        emailControl?.addValidators(Validators.required);
      } else {
        emailControl?.removeValidators(Validators.required);
      }
      emailControl?.updateValueAndValidity();
    });
  }

  get phone(): FormArray {
    return this.userForm.get('phone') as FormArray;
  }

  addPhone(): void {
    this.phone.push(this.fb.control('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]));
  }

  removePhone(index: number): void {
    this.phone.removeAt(index);
  }

  submit() {
    console.log(this.userForm.get('fName')?.touched);
  }

  checkPassword(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;

      if (!password || !confirmPassword) return null;

      return password === confirmPassword ? null : { passwordMissMatch: true };
    };
  }
}
