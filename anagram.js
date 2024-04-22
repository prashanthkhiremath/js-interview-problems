let s1 = 'apple';
let s2 = 'leppa';

function anagram(s1,s2){
    if(s1.length !== s2.length) {
        return 'not an anagram';
    }

    s1 = s1.split("").sort();
    s2 = s2.split("").sort();

    if(_isEqualArrays(s1,s2)) {
        return `It's an anagram`;
    } else {
        return `It's not an anagram`;
    }
}

function _isEqualArrays(s1,s2) {
    let count = 0;
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]){
            return false;
        } else {
            count++;    
        }
    }
    return count === s1.length;
}

const res = anagram(s1,s2);

console.log(res);