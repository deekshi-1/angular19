import { DataServices } from './../../services/data/data-services';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataServices) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]], lastName: [''],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      querry: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.dataService.sendQuery(this.contactForm.value).subscribe(item => {
      this.contactForm.reset()
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.setErrors(null);
        this.contactForm.get(key)?.markAsPristine();
        this.contactForm.get(key)?.markAsUntouched();
      });
      if(item)alert("Querry Submitted")
    })
  }
}
