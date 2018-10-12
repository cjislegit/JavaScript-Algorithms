let missingNumber = numArray => {
  numArray.sort((a, b) => {
    return a - b;
  });
  let counter = numArray[0];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] !== counter) {
      return counter;
    } else {
      counter++;
    }
  }

  return numArray;
};

console.log(missingNumber([0, 3, 5, 8, 4, 6, 1, 9, 7]));
console.log(missingNumber([1, 2, 5, 0, 6, 7, 9, 3, 4]));
