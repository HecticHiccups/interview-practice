/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "fizz";
    }
    if (i % 5 === 0) {
      output += "buzz";
    }
    console.log(output || i);

    // if (i % 15 === 0) {
    //   console.log("fizzbuzz");
    // } else if (i % 3 === 0) {
    //   console.log("fizz");
    // } else if (i % 5 === 0) {
    //   console.log("buzz");
    // } else {
    //   console.log(i);
    // }
  }
}

module.exports = fizzBuzz;
