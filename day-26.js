//https://www.codewars.com/kata/559f3e20f4f29869cf0000ea
function OrderPeople (people){
  return people.sort((p1, p2) => { return p1.age - p2.age; });
}

// https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f
Function.prototype.bind = function (ctx) {
  const func = this;
  return function (...args) {
    return func.call(this === global ? ctx : this, ...args);
  };
};
