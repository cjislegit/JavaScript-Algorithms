function longestWord(str){
    let word = "";
    str = str.replace(/[^A-Za-z" "]/g, "");
    str = str.split(" ");

    str.forEach((element) => {
        if(word.length < element.length){
            word = element;
        }
    });
    
    return word;
}

function longestWord2(str){
    let filteredArray = str.replace(/[\W]/g, ' ').split(' ');
    let word = '';

    filteredArray.forEach((element) => {
        word = element.length < word.length ? word : element;
    });
    return word;
}


console.log(longestWord('Ready, set, go!'));
console.log(longestWord2('Ready[[[[, set, go!'));
console.log(longestWord('ABc'));