let vowelString = "aepptous";

function demo(vowelString){
    let outPut = ''; 
    for(let ele of vowelString) {
        if(ele === 'a' || ele === 'e' || ele === 'i' || ele === 'o' || ele ==='u') {
            outPut += ele;
        }
    }
    return outPut;
}

console.log(demo(vowelString));