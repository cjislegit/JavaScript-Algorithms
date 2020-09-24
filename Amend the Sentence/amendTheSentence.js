const amendTheSentence = (str) => {
  let splitArr = str.split('');
  for (let i = 0; i < splitArr.length; i++) {
    splitArr[i] !== splitArr[i].toLowerCase()
      ? (splitArr[i] = ' ' + splitArr[i].toLowerCase())
      : splitArr[i];
  }
  return splitArr.join('');
};

console.log(amendTheSentence('CodingGodDoesWorkSon'));
console.log(amendTheSentence("Ain'tNoFunIfTheHomieDon'tCodeNone"));
