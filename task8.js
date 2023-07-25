const numbers = [15, 37, 9, 4, 67, 21, 12, 28, 1, 21, 55];

const secondSmallerNumber = (arr) => arr.sort((a, b) => a - b)[1];

console.log(secondSmallerNumber(numbers))