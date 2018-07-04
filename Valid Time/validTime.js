function isValidTime (time){
    time = time.split(':');
    isValid = true;

    for(let i = 0; i < time.length; i++){
        time[i] = Number(time[i])
    }
    if((time[0] < 0 || time[0] >= 24) || (time[1] < 0 || time[1] > 59)){
        isValid = false;
    }

        return isValid;
}

function isValidTime2 (time){
    let timeArray = time.split(':');

    if(Number(timeArray[0]) < 0 || Number(timeArray[0]) >= 24){
        return false;
    } else if(Number(timeArray[1]) < 0 || Number(timeArray[1]) > 59){
        return false;
    }
    return true;
}

console.log(isValidTime('24:00'));
console.log(isValidTime('23:01'));
console.log(isValidTime2('22:00'));
console.log(isValidTime2('22:60'));

