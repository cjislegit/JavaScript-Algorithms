const firstDuplicate = (arr) => {
  let firstDupe = -1;
  let arrCopy = [...arr];
  for (i = 0; i <= arr.length; i++) {
    arr.shift();
    if (arr.includes(arrCopy[i])) {
      firstDupe = arrCopy[i];
      break;
    }
  }
  return firstDupe;
};

console.log(firstDuplicate([2, 3, 3, 1, 5, 2]));
console.log(firstDuplicate([2, 2]));
console.log(firstDuplicate([2, 1, 3]));
