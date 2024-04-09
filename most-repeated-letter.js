let  dataString = 'asdbbefaa';
let repeatedStringCountArray = [];

function mostRepeatedString(dataString){
    for(let ele of dataString) {
        let count = 0;
        let tempArray = dataString.split('');
        for(let tempEle of tempArray ) {
            if( ele === tempEle ) {
               count ++; 
            }
        }
        getMostRepeatedString(ele, count);
    }
    return repeatedStringCountArray[repeatedStringCountArray.length - 1];
}

function getMostRepeatedString(ele, count) {    
    repeatedStringCountArray.push({ele,count})
    repeatedStringCountArray.sort((a,b) => a.count - b.count);
}

console.log(mostRepeatedString(dataString));