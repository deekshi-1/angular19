import { Component, signal } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DataServices } from '../../services/data/data-services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatChipsModule, MatIconModule],
  templateUrl: './add-project.html',
  styleUrl: './add-project.scss'
})
export class AddProject {
  projectForm: FormGroup;
  itemid: string = ''
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  constructor(private fb: FormBuilder, private dataService: DataServices, private router: Router, private route: ActivatedRoute) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      techStack: this.fb.array([], this.minLengthArray(1)),
      description: this.fb.array([], this.minLengthArray(1))
    });
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.dataService.getProject(id).subscribe(item => this.patchData(item))
        this.itemid = id
      }
    });

  }

  patchData(data: any) {
    this.projectForm.patchValue({
      name: data.name
    });

    // Patch techStack array
    if (data.techStack && Array.isArray(data.techStack)) {
      data.techStack.forEach((tech: string) => {
        this.techStack.push(this.fb.control(tech, Validators.required));
      });
    }

    // Patch description array
    if (data.description && Array.isArray(data.description)) {
      data.description.forEach((desc: string) => {
        this.description.push(this.fb.control(desc, Validators.required));
      });
    }
  }

  get techStack(): FormArray {
    return this.projectForm.get('techStack') as FormArray;
  }

  get description(): FormArray {
    return this.projectForm.get('description') as FormArray;
  }

  add(event: any, type: 'techStack' | 'description'): void {
    console.log("dsadas");

    let value = '';
    let inputElement: HTMLInputElement | null = null;

    if (type === 'techStack') {
      inputElement = event.input;
      value = event.value?.trim();
    } else if (type === 'description') {
      inputElement = event.target as HTMLInputElement;
      value = inputElement.value.trim();
    }

    if (value) {
      const control = this.projectForm.get(type) as FormArray;
      control.push(this.fb.control(value));
    }

    if (inputElement) {
      inputElement.value = '';
    }
    console.log(this.projectForm.value);

  }

  remove(index: number, type: 'techStack' | 'description'): void {
    const control = this.projectForm.get(type) as FormArray;
    if (control && control.length > index) {
      control.removeAt(index);
    }
  }
  reset() {
    this.projectForm.reset()
    Object.keys(this.projectForm.controls).forEach(key => {
      this.projectForm.get(key)?.setErrors(null);
      this.projectForm.get(key)?.markAsPristine();
      this.projectForm.get(key)?.markAsUntouched();

      // ['techStack', 'description'].forEach(field => {
      //   const control = this.projectForm.get(field) as FormArray;
      //   for (let i = control.length - 1; i >= 0; i--) {
      //     if (!control.at(i).value || control.at(i).value.trim() === '') {
      //       control.removeAt(i);
      //     }
      //   }
      // });
    });
  }
  onSubmit(): void {
    if (this.itemid !== '') {
      this.dataService.patchProject(this.itemid, this.projectForm.value).subscribe(item => {
        if (item) alert("Querry Submitted")
        this.router.navigate(['/home/project']);
      })
    }
    else {
      this.dataService.addProject(this.projectForm.value).subscribe(item => {
        if (item) alert("Querry Submitted")
        this.router.navigate(['/home/project']);
      })
    }

  }

  minLengthArray(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control instanceof FormArray) {
        return control.length >= min ? null : { minLengthArray: { requiredLength: min, actualLength: control.length } };
      }
      return null;
    };
  }
}
