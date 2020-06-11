'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade;
    // Write your code here
    if(score < 5) {
        grade = 'F'
        return grade;
    }
    if(score < 10) {
        grade = 'E'
        return grade;
    }
    if(score < 15) {
        grade = 'D'
        return grade;
    }
    if(score < 20) {
        grade = 'C'
        return grade;
    }
    if(score < 25) {
        grade = 'B'
        return grade;
    }
    if(score < 30) {
        grade = 'A'
        return grade;
    }
    return grade;
}


function main() {
    const score = +(readLine());
    console.log(getGrade(score));
}