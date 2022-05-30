//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
  return [...str2].every(a => str2.split(a).length <= str1.split(a).length);
}

//https://leetcode.com/problems/two-sum/

const twoSum = function(nums, target) {
const map = {};
  nums.forEach( (nuum, i) => map[num] = i);
  for (let i = 0; i< nums.length; i++) {
    const pairIdx = map[target - nums[i]];
    if (pairIdx !== undefined && pairIdx !== i) {
      return [i, pairIdx];
    }
    //map[nums[i]] = i
}
return [-1; -1];



