/*
*-------------------------
*       Problem Info
*-------------------------

* Direct Link: https://www.hackerrank.com/challenges/js10-binary-calculator
* Difficulty: Medium
* Max Score: 30
* Language: JavaScript (Node.js)

* ------------------------
*         Solution
* ------------------------
*/

// binaryCalculator.css

body {
  width: 33%;
}

#res {
  background-color: lightgray;
  border: solid;
  height: 48px;
  font-size: 20px;
}

.btn {
  width: 25%;
  height: 36px;
  font-size: 18px;
  margin:0;
  float: left;
}

.digits {
  background-color: lightgreen;
  color: brown;
}

.controlRes {
  background-color: darkgreen;
  color: white;
}

.operands {
  background-color: black;
  color: red;
}

// binarycalculator.js

const Calculator = class Calculator {
  init() {
    this.firstNumber = "";
    this.firstSet = false;
    this.secondNumber = "";
    this.secondSet = false;
    this.operand = "";
    this.opSet = false;
    this.inputArray = [];
    this.result = "";
  }

  setFirstNumber(number){
    this.firstNumber += number;
  }

  setSecondNumber(number){
    this.secondNumber += number;
  }

  setOperand(oper){
    this.operand = oper;
    // this.firstSet = true;
  }

  setFirstTrue() {
    this.firstSet = true;
  }

  setSecondTrue(){
    this.secondSet = true;
  }

  setOpTrue() {
    this.opSet = true;
  }

  handleButtonPress(e){
    const input = e.target.innerHTML;
    if(e.target.className.indexOf("btn") != -1){
      if(this.result !== ""){
        this.init();
      } 
      if(input != "C" && input != "="){
        if(input === "0" || input === "1"){
          this.handleDigit(input);
        } else {
          this.handleOperand(input);
        }
          this.show();
      } else if(input === "="){
        this.handleEquals();
      } else {
        this.handleClear();
      }
    }
  }

  handleDigit(number){
    if(!this.firstSet){
      this.setFirstNumber(number);
    } else {
      if(this.opSet && this.secondNumber === ""){
        this.inputArray.push(this.operand);
      }
      this.setSecondNumber(number);
    }
  }

  handleOperand(op){
    if(this.opSet){
      console.log("can't do that yet!");
    } else {
      this.setOpTrue();
      if(!this.firstSet){
        this.setFirstTrue();
        this.inputArray.push(this.firstNumber);
      }
      this.setOperand(op);
    }
  }

  handleEquals() {
    if(!this.secondSet){
      if(!this.opSet || !this.firstSet){
        this.show(this.firstNumber);
      } else {
        this.setSecondTrue();
        this.inputArray.push(this.secondNumber);
      }
    }
    const result = this.calculate(this.inputArray);
    this.result = result;
    this.show(result);
  }

  handleClear() {
    let screen = document.getElementById("res");
    screen.innerHTML = "";
    this.init();
  }

  show(result) {
    let screen = document.getElementById("res");
    if(!this.result){
      screen.innerHTML = `${this.firstNumber}${this.operand}${this.secondNumber}`;
    } else {
      screen.innerHTML = result;
      this.init();
      this.handleDigit(result);
    }
      
      
  }

  calculate(arr){
    console.log(arr);
    const a = parseInt(arr[0],2);
    const b = parseInt(arr[2],2);
    
    switch(arr[1]){
      case "+":
        return this.add(a, b);
        break;
      case "-":
        return this.subtract(a, b);
        break;
      case "/":
        return this.divide(a, b);
        break;
      case "*":
        return this.multiply(a, b);
        break;
    }
  }

  add(a,b){
    let res = a + b;
    return res.toString(2);
  }

  subtract(a,b){
    let res = a - b;
    return res.toString(2);
  }

  divide(a,b){
    let res =  a / b;
    return res.toString(2);
  }

  multiply(a,b){
    let res =  a * b;
    return res.toString(2);
  }

}

let calc = new Calculator();
document.body.onclick = e => {
  calc.handleButtonPress(e);
}

//index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./css/binaryCalculator.css" type="text/css">
  <title>Binary Calculator</title>
</head>

<body>

  <div id="container">
      <div id="res"></div>
      <div id="btns">
          <button class="digits btn" id="btn0">0</button>
          <button class="digits btn" id="btn1">1</button>
          <button class="controlRes btn" id="btnClr">C</button>
          <button class="controlRes btn"id="btnEql">=</button>
          <button class="operands btn" id="btnSum">+</button>
          <button class="operands btn" id="btnSub">-</button>
          <button class="operands btn" id="btnMul">*</button>
          <button class="operands btn" id="btnDiv">/</button>
      </div>        
  </div> 

  <script src="./js/binaryCalculator.js" type="text/javascript"></script>
</body>
</html>
