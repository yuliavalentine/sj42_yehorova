//https://www.codewars.com/kata/array-number-reduce
Array.prototype.reduce = function (process, initial) {
  let acc = initial || this[0];
  for (let i = initial ? 0 : 1; i < this.length; i++) {
    acc = process(acc, this[i], this);
  }
  return acc;
};


//https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056
Object.deepFreeze = function(object) {
  Object.freeze(object);
  for (let obj in object) {
    Object.deepFreeze(object[obj]);
  }
}
