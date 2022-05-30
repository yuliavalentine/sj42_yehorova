// https://www.codewars.com/kata/5636840bd87777688b00006c
function* generator() {
  let counter = 1;
  while (true) {
    const newValue = yield counter++;
    counter = newValue || counter;
  }
}
