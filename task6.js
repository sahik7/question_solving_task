function passGenerator(length) {
    const uppercaseCharecters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseCharecters = 'abcdefghijklmnopqrstuvwxyz';
    const numberCharecters = '0123456789';
    const specialCharecters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let password =
        uppercaseCharecters[Math.floor(Math.random() * uppercaseCharecters.length)] +
        lowercaseCharecters[Math.floor(Math.random() * lowercaseCharecters.length)] +
        numberCharecters[Math.floor(Math.random() * numberCharecters.length)] +
        specialCharecters[Math.floor(Math.random() * specialCharecters.length)];



    const remainingLength = length - 4;
    const allCharacters =
        uppercaseCharecters + lowercaseCharecters + numberCharecters + specialCharecters;



    for (let i = 0; i < remainingLength; i++) {
        password = password + allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    return password
}

const password = passGenerator(10);
console.log(password)