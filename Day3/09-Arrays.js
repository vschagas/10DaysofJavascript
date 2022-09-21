/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-arrays/problem
* Difficulty: Easy
* Max Score: 15
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  let max = Math.max(...nums)
  
  let number = nums.filter((element) => element != max)
  return Math.max(...number)
}