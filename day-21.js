//https://www.codewars.com/kata/573e6831e3201f6a9b000971
const regex=/\b(\w?)(\w?)(\w)\w{0,1}\3\2\1\b/g

//https://www.codewars.com/kata/573fb9223f9793e485000453

const regex=/(\d)(?=(\d{3})+$)/g
const addCommas = (money,reg) => money.replace(reg,x=>x+",");
