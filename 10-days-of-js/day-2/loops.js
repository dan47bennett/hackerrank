function vowelsAndConsonants(s) {
    const lettersArray = s.split("");

    lettersArray.forEach(letter => {
        if(isVowel(letter)) console.log(letter);
    });

    lettersArray.forEach(letter => {
        if(!isVowel(letter)) console.log(letter);
    });
}

function isVowel(letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(letter);
}

const testString = 'abcdef'
answer = vowelsAndConsonants(testString);
console.log('answer: ', answer);
