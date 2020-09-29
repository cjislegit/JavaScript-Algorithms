const uniqueValue = (arr1, arr2) => {
  let newArr = [];
  arr1.forEach((element) => {
    if (!arr2.includes(element)) {
      newArr.push(element);
    }
  });
  arr2.forEach((element) => {
    if (!arr1.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};

console.log(uniqueValue([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(uniqueValue([1, 'calf', 3, 'piglet'], [7, 'filly']));
console.log(uniqueValue([2, 1, 3], [3, 2, 1]));
