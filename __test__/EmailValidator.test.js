import emailValidator from '../path-to-emailValidator';

describe('emailValidator', () => {
  it('should return an empty string for a valid email', () => {
    const validEmail = 'example@example.com';
    expect(emailValidator(validEmail)).toBe('');
  });

  it('should return an error message for an invalid email', () => {
    const invalidEmail = 'invalid-email';
    expect(emailValidator(invalidEmail)).toBe('Ooops! We need a valid email address.');
  });

  it('should return an error message for an empty email', () => {
    const emptyEmail = '';
    expect(emailValidator(emptyEmail)).toBe("Email can't be empty.");
  });
});
