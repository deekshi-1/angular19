import { ElementRef } from '@angular/core';
import { PhoneDirective } from './phone';

describe('PhoneDirective', () => {
  it('should create an instance', () => {
    const mockElement = new ElementRef(document.createElement('span'));
    const directive = new PhoneDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
