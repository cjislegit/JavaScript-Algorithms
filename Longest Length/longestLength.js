function solution1(sentence){
    let longestWord =" ";
    let newSentence = sentence.replace(/[^\w\s]/gi, '').split(" ");

    for(let i = 0; i < newSentence.length; i++){
        if(newSentence[i].length > longestWord.length){
            longestWord = newSentence[i];
        }
    }
    return longestWord.length
}

console.log(solution1("I am a coding god"));
console.log(solution1("I would like to work for Google"));
console.log(solution1("Ain't no fun if the homie don't code none"));
