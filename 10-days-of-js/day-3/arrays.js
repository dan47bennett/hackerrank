/**
*   Return the second largest number in the array.
**/

function getSecondLargest(numberArray) {
    const largest = Math.max.apply(Math, numberArray);
    const remainingNumbers = numberArray.filter(n => n !== largest);
    const secondLargest = Math.max.apply(Math, remainingNumbers);
    return secondLargest;
}

ans = getSecondLargest([1,2,3]);
console.log('ans: ', ans);