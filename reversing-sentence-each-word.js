let sentenceString = 'hey how are you';

function stringReversal(sentenceString){
    let splitArray = sentenceString.split(" ");
    let reversalSentenceArray = '';
    let tempArray = [];
    if(splitArray.length) {
        for(let i = 0; i <= splitArray.length - 1; i++) {
            tempArray = splitArray[i].split('');
            for(let j = tempArray.length - 1; j >= 0; j--) {
                reversalSentenceArray += tempArray[j];    
            }
            reversalSentenceArray += ' ';
        }
    }
    return reversalSentenceArray;
}

console.log(stringReversal(sentenceString));