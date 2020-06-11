function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let i in s) {
        let letter = s[i];
        if(vowels.includes(letter)) {
            console.log(letter);
        }
    }

    for(let i in s) {
        let letter = s[i];
        if(!vowels.includes(letter)) {
            console.log(letter);
        }
    }
}


const testString = 'abcdef'
answer = vowelsAndConsonants(testString);
console.log('answer: ', answer);
