function solution1(sentence){
    let longestWord =0;
    let newSentence = sentence.replace(/[^\w\s]/gi, '').split(" ");

    for(let i = 0; i < newSentence.length; i++){
        if(newSentence[i].length > longestWord){
            longestWord = newSentence[i].length;
        }
    }
    return longestWord
}

function solution2(sentence){
    
}


function solution3(sentence){
    let longestWord = 0;
    let newSentence = sentence.replace(/[^\w\s]/gi, '').split(" ");

    for(let i = 0; i < newSentence.length; i++){
        longestWord = longestWord < newSentence[i].length ? newSentence[i].length : longestWord;
    }
    return longestWord;
}

console.log(solution3("I am a coding god"));
console.log(solution1("I would like to work for Google"));
console.log(solution1("Ain't no fun if the homie don't code none"));
