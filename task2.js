const arrOfNumbers = [2, -5, 10, -3, 7];


function totalPositiveNumbers(array) {
    let total = 0;
    for (let item of array) {
        if (item > 0) {
            total = total + item;
        }
    }
    return total;
}

const totalPositiveNumber = totalPositiveNumbers(arrOfNumbers);
console.log(totalPositiveNumber);