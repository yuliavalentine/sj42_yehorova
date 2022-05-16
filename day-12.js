// https://www.codewars.com/kata/59859f435f5d18ede7000050

function wordToBin(str) {
  var arr = [];
  for (var i = 0; i < str.length; ++i)
    arr.push(0 + str[i].charCodeAt().toString(2));
  return arr;
}

// https://www.codewars.com/kata/57f75cc397d62fc93d000059

function calc(x) {
  let sum = (n) => [...n].reduce((a, b) => +a + +b);
  let total1 = x.replace(/./g, (x) => x.charCodeAt(0));
  let total2 = total1.replace(/7/g, "1");
  return sum(total1) - sum(total2);
}
