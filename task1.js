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