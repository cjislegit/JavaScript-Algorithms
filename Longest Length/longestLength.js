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
    let longestWord = 0;
    let newSentence = sentence.replace(/[^\w\s]/gi, '').split(" ");

    newSentence = newSentence.sort((word1,word2) => {
        return word2.length - word1.length;
    });

    return newSentence[0].length;
}


function solution3(sentence){
    let longestWord = 0;
    let newSentence = sentence.replace(/[^\w\s]/gi, '').split(" ");

    newSentence.forEach((word) => {
        longestWord = longestWord < word.length ? word.length : longestWord;
    });

    return longestWord
}

console.log(solution3("I am a coding god"));
console.log(solution2("I would like to work for Google"));
console.log(solution1("Ain't no fun if the homie don't code none"));
