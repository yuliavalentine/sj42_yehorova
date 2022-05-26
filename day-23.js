//https://www.codewars.com/kata/unpacking-arguments
function spread(func, args) {
  return func(...args);
}

//https://www.codewars.com/kata/for-the-sake-of-argument

function numbers(...arr) {
  let isArrNumeric = true;
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i]) && !Number.isNaN(arr[i])) {
      isArrNumeric = false;
      return isArrNumeric;
    }
  }
  return isArrNumeric;
}
