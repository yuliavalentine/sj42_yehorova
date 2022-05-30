//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
  return [...str2].every(a => str2.split(a).length <= str1.split(a).length);
}


