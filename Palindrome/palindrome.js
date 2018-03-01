function solution1(string){
    let forward = string.toLowerCase().replace(/[\W_]+/g,"");
    let backword = forward.split("").reverse().join("");

    return forward === backword ? true : false;
    //return backword
}

console.log(solution1("_codeGod"))
console.log(solution1("A man, a plan, a canal. Panama"))
console.log(solution1("My age is 0, 0 si ega ym."))