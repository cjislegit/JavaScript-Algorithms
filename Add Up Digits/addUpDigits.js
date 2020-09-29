const addUpDigits = (x) => {
  let sum = 0;
  x = x.toString().split('');

  x.forEach((element) => {
    sum += parseInt(element);
  });

  return sum;
};

console.log(addUpDigits(29));
console.log(addUpDigits(48));
