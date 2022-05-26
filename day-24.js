// https://www.codewars.com/kata/duplicate-arguments
function solution(...arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

//https://www.codewars.com/kata/last
function last(arr, ...list) {
  if (list.length > 0) {
    return list[list.length - 1];
  }
  if (list.length === 0 && arr.length > 1) {
    return arr[arr.length - 1];
  }
  if (!Array.isArray(arr)) {
    return arr;
  }
}
