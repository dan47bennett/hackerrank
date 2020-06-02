//This function must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.


function makeAnagram(stringA, stringB) {
    const mapA = createMap(stringA);
    const mapB = createMap(stringB);

    let changeNeeded = 0;

    for(let j in mapA) {
        if(mapA[j] && mapB[j]) {
            changeNeeded += Math.abs(mapA[j] - mapB[j]);
        }
        else if(!mapB[j]) {
            changeNeeded += mapA[j];
        }
    }
    for(let k in mapB) {
        if(!mapA[k]) {
            changeNeeded += mapB[k];
        }
    }

    return changeNeeded;
}

function createMap(inputString) {
    const letterMap = new Map();
    for(let i in inputString) {
        let letter = inputString[i];
        if(letterMap[letter]) {
            letterMap[letter] += 1;
        }
        else {
            letterMap[letter] = 1;
        }
    }
    return letterMap;
}


num = makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')
console.log('makeAnagram: ', num);