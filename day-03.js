// https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

function trueOrFalse(val) {
  if (val) {
    return "true";
  } else {
    return "false";
  }
}

// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
}

// https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript


function howManydays(month) {
  let days;
  switch (month) {
    case 1:
      days = 31;
      break;
    case 3:
      days = 31;
      break;
    case 5:
      days = 31;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 10:
      days = 31;
      break;
    case 12:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    case 6:
      days = 30;
      break;
    case 9:
      days = 30;
      break;
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
  }
  return days;
}
