// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built -in reverse() method. 


const string = "hello world";


function reverseStr(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString = reversedString + string[i];
    }
    return reversedString;
}

const reversedString = reverseStr(string);

console.log(reversedString); 