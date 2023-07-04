import { convertToRoman } from '../numeralskata/numeralskata'

describe('convertToRoman', () => {
    it('should throw an error for invalid input', () => {
        expect(() => convertToRoman(0)).toThrow('Invalid input');
        expect(() => convertToRoman(-1)).toThrow('Invalid input');
        expect(() => convertToRoman(4000)).toThrow('Invalid input');
        expect(() => convertToRoman('z')).toThrow('Invalid input');
      });

    it('should convert numbers to Roman Numerals', () => {
        expect(convertToRoman(1)).toBe('I');
        expect(convertToRoman(4)).toBe('IV');
        expect(convertToRoman(5)).toBe('V');
        expect(convertToRoman(9)).toBe('IX');
        expect(convertToRoman(10)).toBe('X');
        expect(convertToRoman(27)).toBe('XXVII');
        expect(convertToRoman(49)).toBe('XLIX');
        expect(convertToRoman(100)).toBe('C');
        expect(convertToRoman(256)).toBe('CCLVI');
        expect(convertToRoman(492)).toBe('CDXCII');
        expect(convertToRoman(1004)).toBe('MIV');
        expect(convertToRoman(1490)).toBe('MCDXC');
        expect(convertToRoman(1499)).toBe('MCDXCIX');
    });
});