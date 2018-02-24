function solution1(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    }
    return "";
}

function solution2(num){
    let word = "";

    if(num % 3 === 0){
        word = word.concat("fizz");
    }

    if(num % 5 === 0){
        word = word.concat("buzz");
    }

    return word;
}

console.log(solution2(3));