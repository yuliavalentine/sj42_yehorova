//https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr) {
  let min = Math.min.apply(
    Math,
    arr.map((str) => str.length)
  );
  return arr.map((element) => element.slice(0, min));
}

// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

function firstToLast(str, c) {
  let lastIndex = str.lastIndexOf(c);
  let firstIndex = str.indexOf(c);
  if (firstIndex === -1) {
    return -1;
  }
  if (lastIndex === firstIndex) {
    return 0;
  }
  return lastIndex - firstIndex;
}

// https://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(string, separator) {
  let splitString = string.split(" ");
  
  return splitString
    .map((element) => {
      return element.split("").join(separator);
    })
    .join(" ");
}
