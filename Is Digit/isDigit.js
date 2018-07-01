function isDigit(str){
    const digitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return digitArray.includes(str);
}

console.log(isDigit('13'));
console.log(isDigit('3'));
console.log(isDigit('d'));
console.log(isDigit('Hello'));