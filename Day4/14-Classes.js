/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-create-a-button
* Difficulty: Easy
* Max Score: 20
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/


class Polygon {
  constructor(args) {
    this.values = args;
  }

  perimeter() {
    return (this.values || []).reduce((target, item) => target + item);
  }
}