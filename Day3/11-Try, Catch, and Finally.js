/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem
* Difficulty: Easy
* Max Score: 15
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/
function reverseString(s) {
  try {
 s = s.split('').reverse().join('');
} catch (error) {
 console.log('s.split is not a function');
}

console.log(s);
}


// SOLUTION 2

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
// function reverseString(s) {
//   typeof s !== 'string'
//     ? console.log('s.split is not a function')
//     : (s = s.split('').reverse().join(''));

//   console.log(s);
// }