/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-buttons-container
* Difficulty: Easy
* Max Score: 20
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

// buttonsGrid.css

.buttonContainer {
  width: 75%;
}

.buttonContainer > .button {
  width: 30%;
  height: 48px;
  font-size: 24px;
}

//buttonsGrid.js

btn5.onclick = function () {  
  var viarableNum = btn1.innerHTML; btn1.innerHTML = btn4.innerHTML;
  btn4.innerHTML = btn7.innerHTML; btn7.innerHTML = btn8.innerHTML;
  btn8.innerHTML = btn9.innerHTML; btn9.innerHTML = btn6.innerHTML; 
  btn6.innerHTML = btn3.innerHTML; btn3.innerHTML = btn2.innerHTML; 
  btn2.innerHTML = viarableNum;  
};

// index.html

<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Buttons Grid</title>
    <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
  <style>
      buttonsGrid.css
  </style>
  </head>
  <body>
    <div id="btns" class="buttonContainer">
      <button id="btn1" class="button">1</button>
      <button id="btn2" class="button">2</button>
      <button id="btn3" class="button">3</button>
      <button id="btn4" class="button">4</button>
      <button id="btn5" class="button">5</button>
      <button id="btn6" class="button">6</button>
      <button id="btn7" class="button">7</button>
      <button id="btn8" class="button">8</button>
      <button id="btn9" class="button">9</button>
    </div>
    <script>
        buttonsGrid.js
    </script>
  </body>
</html>