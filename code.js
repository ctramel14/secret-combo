/* Pseudocode
1. Create initial greeting
2. Create arithmetic variables for 10, 40, and 39
3. Combine greeting and variables
4. Turn into an alert
*/

// Greeting for website guest
const greeting =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
console.log(greeting);

// Variables for secret message
let code1 = 8 + 2;
let code2 = 4 * 10;
let code3 = 44 - 5;

//Combine the greeting
const fullGreeting = `${greeting} ${code1} - ${code2} -${code3}`;

//Make alert
alert(fullGreeting);
