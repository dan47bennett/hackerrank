function minimumBribes(queue) {
    let totalDisplacement = 0;
    let tooChaotic = false;
    for(let i = 0; i < queue.length; i++) {

        let difference = Math.abs(queue[i] - (i + 1));

        if(queue[i] - (i + 1) > 2) {
            tooChaotic = true;
        }
        else {
            totalDisplacement += difference;
        }
    }
    if(tooChaotic) {
        console.log('Too chaotic');
        return;
    }
    console.log(totalDisplacement / 2);
}

function numberOfSwaps(queue) {
    
}

const testArray = [5, 1, 2, 3, 7, 8, 6, 4]
minimumBribes(testArray);