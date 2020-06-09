


function stripProperty(obj, prop) {
    // write your code here
    const newObject = {};
    if(!obj.hasOwnProperty(prop)) {
        return obj;
    }

    for(const property in obj) {
        if(property !== prop) {
            console.log(property);
            newObject[property] = obj[property];
        }
    }
    return newObject;
}