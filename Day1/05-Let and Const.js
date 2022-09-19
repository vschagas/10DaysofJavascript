/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-let-and-const/problem
* Difficulty: Easy
* Max Score: 10
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  let r = readLine();
  
  let area = PI * (r**2);
  let perimeter = 2 * PI * r;
  
  console.log(area);
  console.log(perimeter);
}