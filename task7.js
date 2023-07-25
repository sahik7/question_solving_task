function romanToInteger(roman) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    let prevValue = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentChar = roman[i].toUpperCase();
        const currentValue = romanNumerals[currentChar];

        console.log(currentValue, prevValue)
        if (currentValue > prevValue) {
            result = currentValue - prevValue;
        } else {
            result = result + currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

const romanNumeral = "iv";

console.log(romanToInteger(romanNumeral));
