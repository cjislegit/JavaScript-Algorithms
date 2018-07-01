function repeatString(str, num){
    let newString = "";
    while(num > 0){
        newString += str;
        --num;
    }
    return newString;
}

function repeatString2(str, num){
    return str.repeat(num);
}

console.log(repeatString('test', 3));
console.log(repeatString2('trial', 5));