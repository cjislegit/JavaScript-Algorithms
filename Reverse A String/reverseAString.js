function solution1(word){
    return word.split("").reverse().join("");
}

function solution2(word){
    let reverseWord = "";
    for(var i = word.length - 1; i >= 0; i-- ){
        reverseWord += (word[i]);
    }
    return reverseWord;
}

console.log(solution1("codegod"))
console.log(solution2("codegod"))