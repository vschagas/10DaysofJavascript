/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-loops/problem
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
function vowelsAndConsonants(s) {
  const volwel = ['a', 'e', 'i', 'o', 'u']
  const frase = s.split("");
  
  for (let i = 0 ; i < frase.length; i++){
      if (volwel.includes(frase[i]))
          console.log(frase[i])
  }
  
  for (let i = 0 ; i < frase.length; i++) {
      if (!volwel.includes(frase[i]))
          console.log(frase[i])
  }
}
