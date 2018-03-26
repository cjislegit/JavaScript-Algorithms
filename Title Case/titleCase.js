function solution1(sentence){
    let sentenceArray = sentence.split(" ");

    sentenceArray = sentenceArray.map((word) => {
        const fletter = word.charAt(0).toUpperCase();

        word = fletter.concat(word.slice(1, word.length));

        return word;
    });

    return sentenceArray.join(" ");
}

console.log(solution1("I am a coding god"))
console.log(solution1("I would like to work for Google"))