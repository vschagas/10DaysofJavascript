/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-count-objects/problem
* Difficulty: Easy
* Max Score: 15
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

// First solution

function getCount(objects) {
  var count = 0;

  objects.forEach(function(o){
    if (o.x === o.y){
      count++;
    }
  })

  return count;

}

// Second Solution 

function getCount(objects) {
  return objects.reduce((target, item) => {
  item.x === item.y && (target += 1);

  return target;
}, 0);
}
