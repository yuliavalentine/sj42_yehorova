//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

function whatNumberIsIt(n) {
  switch (true) {
    case n === Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
    case n === Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
    case n === Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
    case n === Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
    case isNaN(n):
      return "Input number is Number.NaN";
    default:
      return "Input number is " + n;
  }
}

// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
function colorOf(r, g, b) {
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);

  red = red.length < 2 ? "0" + red : red;
  green = green.length < 2 ? "0" + green : green;
  blue = blue.length < 2 ? "0" + blue : blue;

  let color = "#" + red + green + blue;
  return color;
}

//https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr, n) {
  let result = 0;
  arr.forEach((element) => {
    if (n > element.toFixed(2)) {
      result += 1;
    }
  });

  return result;
}
