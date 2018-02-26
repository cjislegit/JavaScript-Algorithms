function solution1(num){
    let factorial = 1;
    for(let i = num; i > 0; i--){
        factorial *= i;
        console.log(factorial)
    }
    return factorial;
}

console.log(solution1(0))