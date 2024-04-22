Array.prototype.even = function() {
    const newArray = [];
    console.log();
    for(let i = 0; i < this.length; i++) {
        if(this[i] % 2 === 0) {
            console.log(this[i]);
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const result = [1,2,3,4,5].even(); 

console.log(result);