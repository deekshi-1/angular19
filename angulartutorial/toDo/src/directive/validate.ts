import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateDirective,
      multi: true
    }
  ]
})
export class ValidateDirective implements Validator {
  @Input('appValidate') validationType: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.validationType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const value = control.value;
      if (value && !emailRegex.test(value)) {
        return { invalidEmail: true };
      }
    }
    return null;
  }
}
