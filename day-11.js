// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2) {
  if (s1.size != s2.size) return false;
  for (let el of s1) {
    if (!s2.has(el)) return false;
  }
  return true;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}

// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

function process2Arrays(arr1, arr2) {
  let calculateBoth = arr1.filter(
    (element) => arr2.indexOf(element) != -1
  ).length;
  let calculatedOne =
    arr1.filter((element) => arr2.indexOf(element) === -1).length +
    arr2.filter((element) => arr1.indexOf(element) === -1).length;
  let calculateRemaning = (a, b) =>
    a.filter((element) => b.indexOf(element) === -1).length;
  return [
    calculateBoth,
    calculatedOne,
    calculateRemaning(arr1, arr2),
    calculateRemaning(arr2, arr1),
  ];
}
