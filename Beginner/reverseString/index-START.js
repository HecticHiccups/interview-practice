/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function reverseString(text) {
  //   return text
  //     .split("")
  //     .reverse()
  //     .join("");

  //Iterate with for Loop
  //   var revStr = "";
  //   for (i = text.length - 1; i >= 0; i--) {
  //     revStr += text[i];
  //   }
  //   return revStr;

  //Favorite one, with reduce.
  //return [...text].reduce((acc, char) => char + acc);
  //   let result = "";
  //   for (let char of text) {
  //     result = char + result;
  //   }
  return result;
}

module.exports = reverseString;
