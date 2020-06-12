function longestEvenWord(sentence) {
    const words = sentence.split(' ');
    const evenWords = words.filter( word => word.length % 2 === 0);

    if(evenWords.length === 0) return '00'

    let longest = 0;
    evenWords.forEach(word => {
        if(word.length > longest) longest = word.length
    });

    const longestWords = evenWords.filter( word => word.length === longest);
    return longestWords[0];

}


const testSentence ='This is a test sentence for testing';
const LEV = longestEvenWord(testSentence);
console.log('LEV: ', LEV);
