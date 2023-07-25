// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 


const arr = [5, 2, 5, 3, 3, 1, 4, 5];

function frequentNumberFinder(array) {
    const frequencyCheck = {};
    let maxItem = array[0];
    let maxCount = 1;
    for (let item of array) {
        if (frequencyCheck[item]) {
            frequencyCheck[item] = frequencyCheck[item] + 1;
        }
        else {
            frequencyCheck[item] = 1;
        }

        if (frequencyCheck[item] > maxCount) {
            maxItem = item;
            maxCount = frequencyCheck[item];
        }

    }
    return maxItem;
}


const maxNumber = frequentNumberFinder(arr);
console.log(maxNumber)