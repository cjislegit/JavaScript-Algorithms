const digitSum = (str) => {
  let numArray = str.match(/\d+/g);

  if (numArray) {
    numArray = numArray.reduce((total, currentValue) => {
      return total + Number(currentValue);
    }, 0);
  } else {
    numArray = 0;
  }

  return numArray;
};

console.log(digitSum('2 apples, 12 oranges'));
console.log(digitSum('123450'));
console.log(digitSum('Your payment method is invalid'));
