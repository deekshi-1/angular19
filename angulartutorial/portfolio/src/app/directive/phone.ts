import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const rawPhone = this.el.nativeElement.innerText;
    const cleaned = rawPhone.replace(/\D/g, '');

    if (cleaned.length === 10) {
      const formatted = `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
      this.el.nativeElement.innerText = formatted;
    } else {
      console.warn('Invalid phone number:', rawPhone);
    }
  }
}
