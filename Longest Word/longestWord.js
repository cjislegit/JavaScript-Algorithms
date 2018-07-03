function longestWord(str){
    let word = "";
    str = str.replace(/[^A-Za-z" "]/g, "");
    str = str.split(" ");

    str.forEach((element) => {
        if(word.length < element.length){
            word = element;
        }
    })
    
    return word;
}


console.log(longestWord('Ready, set, go!'));
console.log(longestWord('Ready[[[[, set, go!'));
console.log(longestWord('ABc'));