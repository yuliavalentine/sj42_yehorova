//https://www.codewars.com/kata/547c71fdc5b2b38db1000098
function NameMe(first, last) {
  return {
    firstName: first,
    lastName: last,
    name: first + " " + last,
  };
}

//https://www.codewars.com/kata/547f1a8d4a437abdf800055c

class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(newName) {
   if(newName.indexOf(' ') !== -1)[this.firstName, this.lastName] = newName.split(" ");
  }
}
