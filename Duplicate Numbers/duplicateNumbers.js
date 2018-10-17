let duplicateNumbers = a => {
  //sort array from smallest to largets
  a.sort((a, b) => {
    return a - b;
  });

  //check if any of the elements in the array are duplicates
  for (let i = 0; i < a.length; i++) {
    if (a[i] == a[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(duplicateNumbers([1, 2, 3, 1]));
console.log(duplicateNumbers([3, 1]));
console.log(duplicateNumbers([4, 5, 0, 3, 6]));
