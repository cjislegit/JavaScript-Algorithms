const sumOfDifference = (arr) => {
  let arrTotal = 0;
  let max = Math.max(...arr);

  for (let min = Math.min(...arr); min <= max; min++) {
    arrTotal = arrTotal + min;
  }
  return arrTotal;
};

console.log(sumOfDifference([10, 5]));
console.log(sumOfDifference([3, 7]));
