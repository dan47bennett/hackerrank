function rotLeft(array, numberOfRotations) {
    numberOfRotations = numberOfRotations % array.length;
    for(let j = 0; j < numberOfRotations; j++) {
        oneRotation(array);
    }
    return array;
}

function oneRotation(array) {
    let firstElement = array.shift()
    array.push(firstElement);
}


test = [1,2,3,4, 5]
answer = rotLeft(test, 4);
console.log('answer: ', answer);
