let sortedArray = [1,2,2,3,3,4];

function removeDuplicates(sortedArray) {
    for (let i = 0; i <= sortedArray.length - 1; i++) {
        for(let j = i + 1; j <= sortedArray.length - 1; j++) {
            if(sortedArray[i] === sortedArray[j]) {
                sortedArray.splice(i,1);
            }
        }
    }
    return sortedArray;
}

console.log(removeDuplicates(sortedArray));
