// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(str, n) {
  let result = str;
  let i = 0;

  while (i < n) {
    if (i % 2 === 0) {
      result = `*${result}`;
    } else {
      result = `${result}*`;
    }
    i += 1;
  }
  return result;
}

// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr) {
  let odd = [];
  let even = [];
  for (var x of arr) {
    (x % 2 ? odd : even).push(x);
  }
  return [odd, even];
}

// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

function grabDoll(dolls) {
  var bag = [];
  //coding here
  for (let i in dolls) {
    if (dolls[i] != "Hello Kitty" && dolls[i] != "Barbie doll") {
      continue;
    } else {
      bag.push(dolls[i]);
    }
    if (bag.length == 3) {
      break;
    }
  }
  return bag;
}

// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj) {
  //coding here
  array = [];
  for (var key in obj) {
    if (key.length === 5) {
      array.push(key);
    }
    if (obj[key].length === 5) {
      array.push(obj[key]);
    }
  }
  return array;
}
