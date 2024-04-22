const arry1 = [4,5,6];
const arry2 = [1,2,3];
const arry3 = [...arry1,...arry2].sort((a,b) => a - b);
console.log(arry3);