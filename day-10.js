// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

function alienLanguage(str) {
  let words = str.split(" ");

  let result = words
    .map((element) => {
      return (
        element.toUpperCase().slice(0, element.length - 1) +
        element.slice(element.length - 1).toLowerCase()
      );
    })
    .join(" ");
  return result;
}

// https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript

function topSecret(str) {
  let chars = str.split("");
  for (let i = 0; i < str.length; i++) {
    chars[i] = alphabetBoundary(chars[i]);
  }
  return chars.join("");
}

function alphabetBoundary(char) {
  let code = char.charCodeAt(0);
  if (code > 65 && code < 122) {
    code -= 3;
    code < 65 || (code > 90 && code < 97) ? (code += 26) : code;
  }
  return String.fromCharCode(code);
}

//question1: The top secret file number is...
answer1 = "3823";
//question2: Super agent's name is...
answer2 = "EtRziW";
//question3: He stole the treasure is...
answer3 = "Marie's husband";

// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}
