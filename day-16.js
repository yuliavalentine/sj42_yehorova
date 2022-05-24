// https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

function threeInOne(a) {
  return a.length ? [a[0] + a[1] + a[2]].concat(threeInOne(a.slice(3))) : [];
}

// https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript
function sortIt(arr) {
  let numberOf = {};
  arr.forEach((x) => (numberOf[x] = (numberOf[x] || 0) + 1));
  return arr.slice().sort((x, y) => numberOf[x] - numberOf[y] || y - x);
}

// https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript

const isolateIt = (arr) =>
  arr.map((s) => s.slice(0, s.length / 2) + "|" + s.slice(-s.length / 2));
