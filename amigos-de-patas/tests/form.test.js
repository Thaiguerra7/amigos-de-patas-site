import { validateName, validateEmail, validateCpf, validatePhone, validateDate } from '../src/components/form/validation.js';

describe('Form Validation Tests', () => {
    test('validates name correctly', () => {
        expect(validateName('João Silva')).toBe(true);
        expect(validateName('')).toBe(false);
        expect(validateName('123')).toBe(false);
    });

    test('validates email correctly', () => {
        expect(validateEmail('teste@exemplo.com')).toBe(true);
        expect(validateEmail('invalid-email')).toBe(false);
        expect(validateEmail('')).toBe(false);
    });

    test('validates CPF correctly', () => {
        expect(validateCpf('123.456.789-09')).toBe(true);
        expect(validateCpf('')).toBe(false);
        expect(validateCpf('123.456.789-00')).toBe(false);
    });

    test('validates phone correctly', () => {
        expect(validatePhone('(11) 91234-5678')).toBe(true);
        expect(validatePhone('')).toBe(false);
        expect(validatePhone('123')).toBe(false);
    });

    test('validates date correctly', () => {
        expect(validateDate('2000-01-01')).toBe(true);
        expect(validateDate('')).toBe(false);
        expect(validateDate('01/01/2000')).toBe(false);
    });
});