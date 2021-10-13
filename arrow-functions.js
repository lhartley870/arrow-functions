/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
  // Code Block 
  return a + b; 
}
let sum = addTwoNumbers(3, 5);
console.log(sum); 

// Arrow Function With Parameters

const addThreeNumbers = (a, b, c) => {
  // Code Block 
  return a + b + c; 
}
let sum2 = addThreeNumbers(3, 5, 2);
console.log(sum2); 

// Single Line Arrow Function With Parameters

const addFourNumbers = (a, b, c, d) => a + b + c + d; 

let sum3 = addFourNumbers(3, 5, 2, 2);
console.log(sum3); 

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello there');

const sayHello = () => console.log('hello'); 
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
  `<p>
    This is a multiline string!
  </p>`
)
console.log(returnMultipleLines()); 
