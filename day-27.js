//https://www.codewars.com/kata/56b71b1dbd06e6d88100092a
function buildFun(n) {
    const res = []
    for (let i = 0; i < n; i++) {
        res.push(function () {
            const number = i;
            return number;
        })
    }
    return res
}
//https://www.codewars.com/kata/514aa0dc21607ae236000017

let name;
const greet_abe = function () {
  name = "Abe";
  return "Hello, " + name + "!";
};

const greet_ben = function () {
  name = "Ben";
  return "Hello, " + name + "!";
};
