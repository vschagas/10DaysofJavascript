/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-objects/problem
* Difficulty: Easy
* Max Score: 15
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function() {
  return(this.w*this.h);
};

class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.h = s;
    this.w = s;
  }
};
