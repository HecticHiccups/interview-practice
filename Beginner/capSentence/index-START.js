/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
  //code goes here
  debugger;
  let strArr = text.toLowerCase().split(" ");
  let capStr = strArr.map(word => {
    return word.substr(0, 1).toUpperCase() + word.substr(1);
  });
  return capStr.join(" ");
}

module.exports = capSentence;
