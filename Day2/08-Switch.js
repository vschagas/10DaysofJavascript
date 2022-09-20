/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-switch/problem
* Difficulty: Easy
* Max Score: 10
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function getLetter(s) {
  let letter;
  
  switch (true) {
      case "aeiou".includes(s[0]):
          letter = "A"; break;
      case "bcdfg".includes(s[0]):
          letter = "B"; break;
      case "hjklm".includes(s[0]):        
          letter = "C"; break;
      case "npqrstvwxyz".includes(s[0]):
          letter = "D"; break;
  }
   
  
  return letter;
}