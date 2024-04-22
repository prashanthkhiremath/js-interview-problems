/**
 * solution by me contains more loops
 */

// let  dataString = 'asdbbefaa';
// let repeatedStringCountArray = [];

// function mostRepeatedString(dataString){
//     for(let ele of dataString) {
//         let count = 0;
//         let tempArray = dataString.split('');
//         for(let tempEle of tempArray ) {
//             if( ele === tempEle ) {
//                count ++; 
//             }
//         }
//         getMostRepeatedString(ele, count);
//     }
//     return repeatedStringCountArray[repeatedStringCountArray.length - 1];
// }

// function getMostRepeatedString(ele, count) {    
//     repeatedStringCountArray.push({ele,count})
//     repeatedStringCountArray.sort((a,b) => a.count - b.count);
// }

// console.log(mostRepeatedString(dataString));

/**
 * Feasible solution
 */

var str = "asdbbefaa"

const getMostRepeated=(str)=>{
	var obj = {}
  for(let item of str){
  	if(obj.hasOwnProperty(item)){
      obj[item] = obj[item]+1
    }
    else {
      obj[item] = 1
    }
  }
  let temp = Object.entries(obj)
  temp = temp.sort((a,b)=>b[1]-a[1])
  return temp[0][0]
}

console.log(getMostRepeated(str))