function reverseString(s) {
    try {
        const inputArray = s.split('');
        const reverseArray = inputArray.reverse();
        s = reverseArray.join('');
    }
    catch(err) {
        console.log(err.message);
    }
    finally {
        console.log(s);
    }
}

reverseString('abc');