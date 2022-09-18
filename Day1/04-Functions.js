/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-function/problem
* Difficulty: Easy
* Max Score: 10
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

/*
 * Create the function factorial here
 */

function factorial(n){
  let result = 1;
  for (let i = n; i > 0; i--) {
      result = result * i
  }
  return result;
}
