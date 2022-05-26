//https://www.codewars.com/kata/write-javascripts-call-function-using-apply
Function.prototype.call = function (obj, ...arr) {
  return this.apply(obj, arr)
}

//https://www.codewars.com/kata/anonymous-returns
const name = 'The Window';

const alpha = {
    name : 'My Alpha',
    getNameFunc : function(){
    return function(){
        return this.name;
        }.bind(this);
    }
};
