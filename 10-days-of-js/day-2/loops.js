function vowelsAndConsonants(s) {
    for(let i in s) {
        let letter = s[i];
        if(isVowel(letter)) {
            console.log(letter);
        }
    }

    for(let j in s) {
        let letter = s[j];
        if(!isVowel(letter)) {
            console.log(letter);
        }
    }
}

function isVowel(letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(letter);
}

const testString = 'abcdef'
answer = vowelsAndConsonants(testString);
console.log('answer: ', answer);
