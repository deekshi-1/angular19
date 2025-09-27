import { UniqueAccount } from './unique-account';

describe('UniqueAccount', () => {
  it('should create an instance', () => {
    const directive = new UniqueAccount();
    expect(directive).toBeTruthy();
  });
});
