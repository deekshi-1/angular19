import { ValidateEmail } from './validate-email';

describe('ValidateEmail', () => {
  it('should create an instance', () => {
    const directive = new ValidateEmail();
    expect(directive).toBeTruthy();
  });
});
