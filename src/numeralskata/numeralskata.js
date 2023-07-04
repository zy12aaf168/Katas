const romanNumerals = [
    { numeral: 'M', value: 1000 },
    { numeral: 'CM', value: 900 },
    { numeral: 'D', value: 500 },
    { numeral: 'CD', value: 400 },
    { numeral: 'C', value: 100 },
    { numeral: 'XC', value: 90 },
    { numeral: 'L', value: 50 },
    { numeral: 'XL', value: 40 },
    { numeral: 'X', value: 10 },
    { numeral: 'IX', value: 9 },
    { numeral: 'V', value: 5 },
    { numeral: 'IV', value: 4 },
    { numeral: 'I', value: 1 }

]

export function convertToRoman(number) {
    if (typeof number !== 'number' || number < 1 || number > 3999) {
        throw new Error('Invalid input');
    }
    let romanNumeral = "";
    for (let i = 0; i < romanNumerals.length; i++) {
        const numeral = romanNumerals[i].numeral;
        const value = romanNumerals[i].value;
        while (number >= value) {
            number -= value;
            romanNumeral += numeral;
        }
    }
    return romanNumeral;
}

