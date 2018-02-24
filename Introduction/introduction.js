function solutionOne(firstName,lastName){
    return "Hi, my name is " + firstName + " " + lastName + ".";
}

function solutionTwo(firstName,lastName){
    let intro = "Hi, my name is ".concat(firstName, " ",lastName,".");
    return intro;
}

function solutionThree(firstName,lastName){
    let intro = `Hi, my name is ${firstName} ${lastName}.`;
    return intro;
}

console.log(solutionThree("Carlos","Ramirez"))