// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8

const shuffleIt = (arr, ...num) => {
  for (const [a, b] of num) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
};


// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/

function loopArr(arr, direction, steps) {
  for (let i = 0; i < steps; i++) {
    if (direction === "right") {
      arr.unshift(arr.pop());
    }
    if (direction === "left") {
      arr.push(arr.shift());
    }
  }
  return arr;
}

// https://www.codewars.com/kata/572af273a3af3836660014a1

function infiniteLoop(arr, d, n) {
  const flat = [...arr[0], ...arr[1], ...arr[2]];
  if (d === "left") {
    for (let i = 0; i < n; i++) {
      const first = flat.shift();
      flat.push(first);
    }
  } else {
    for (let i = 0; i < n; i++) {
      const last = flat.pop();
      flat.unshift(last);
    }
  }
  const result = [];
  arr.forEach((el) => result.push(flat.splice(0, el.length)));
  return result;
}
