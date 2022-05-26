// https://www.codewars.com/kata/573023c81add650b84000429
function countGrade(arr) {
  get = (a, b) => arr.filter((i) => i >= a && i < b).length;
  return {
    S: get(100, 101),
    A: get(90, 100),
    B: get(80, 90),
    C: get(60, 80),
    D: get(0, 60),
    X: get(-1, 0),
  };
}


// https://www.codewars.com/kata/57308546bd9f0987c2000d07

function mirrorImage(arr) {
    var a, b;
    var result = arr.some((x, i) => {
        a = x, b = arr[i + 1];
        return x === Number(String(b).split('').reverse().join(''));
    });

    return result ? [a, b] : [-1, -1];
}

//https://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr) {
  let newArr = [].concat(...arr);
  let newArr1 = newArr.sort((a, b) => b - a).join(">");
  return newArr1;
}
