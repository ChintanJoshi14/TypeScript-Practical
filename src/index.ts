
// to get the input from the screen
let screenValue = (document.querySelector('#inputtext') as HTMLInputElement);

 type num1= string | number;
//function to convert string to number
function stringToNumber(arg1:string) {
  return parseInt(arg1);
}

let calculate = (number:num1) => {
      screenValue.value +=number;
};
let Result = () => {
  // log
  function log() {
    let n = screenValue.value.substring(3);
    screenValue.value = String(Math.log(stringToNumber(screenValue.value)));
  }

  //ln => (log10) Natural log to base 10
  function ln() {
    let n = screenValue.value.substring(2);
    screenValue.value = String(Math.log(stringToNumber(screenValue.value)));
  }

  //exp => Euler's Number
  function exp() {
    let n = screenValue.value.substring(3);
    screenValue.value = String(Math.exp(stringToNumber(screenValue.value)));
  }

  // power of a function
  function power() {
    let temp = screenValue.value;
    let param1 = temp.split("^")[0]; //returns string before "^" to get first parameter
    let param2 = temp.substring(temp.indexOf("^") + 1); //returns string after "^" to get second parameter
    screenValue.value = String(Math.pow(stringToNumber(param1),stringToNumber(param2)));
  }

  // absolute value
 function absoluteValue() {
    let temp = screenValue.value;
    let param = temp.replaceAll("|", "");
    screenValue.value = String(Math.abs(stringToNumber(param)));
  }

  // fahrenheit to celsius
  function farToCel() {
    let temp = screenValue.value;
    let fahrenheit = temp.replaceAll("F", "");
    screenValue.value = String(((stringToNumber(fahrenheit) - 32) * 5) / 9);
  }

  // degree to radian
  function degToRad() {
    let temp = screenValue.value;
    let deg = temp.replaceAll("deg", "");
    screenValue.value = String((stringToNumber(deg) * Math.PI) / 180.0);
  }
  // asinh function
  function asinhFunction() {
    let temp = screenValue.value;
    let n = temp.replaceAll("asinh", "");
    screenValue.value = String(Math.asinh(stringToNumber(screenValue.value)));
  }
  // sin function
  function sinFunction() {
    let temp = screenValue.value;
    let n = temp.replaceAll("sin", "");
    screenValue.value = String(Math.sinh(stringToNumber(screenValue.value)));
  }
  // acosh function
  function acoshFunction() {
    let temp = screenValue.value;
    let n = temp.replaceAll("acosh", "");
    screenValue.value = String(Math.acosh(stringToNumber(screenValue.value)));
  }
  // cos function
  function cosFunction() {
    let temp = screenValue.value;
    let n = temp.replaceAll("cos", "");
    screenValue.value = String(Math.cos(stringToNumber(screenValue.value)));
  }
  // atanh function
  function atanhFunction() {
    let temp = screenValue.value;
    let n = temp.replaceAll("atanh", "");
    screenValue.value = String(Math.atanh(stringToNumber(screenValue.value)));
  }

  // tan function
  function tanFunction() {
    let temp = screenValue.value;
    let n = temp.replaceAll("tan", "");
    screenValue.value = String(Math.tan(stringToNumber(screenValue.value)));
  }

  // floor function
  function floorFunction() {
    let temp = screenValue.value;
    let n = temp.replaceAll("floor", "");
    screenValue.value = String(Math.floor(stringToNumber(screenValue.value)));
  }
  // ceil function
  function ceilFunction() {
    let temp = screenValue.value;
    let n = temp.replaceAll("ceil", "");
    screenValue.value = String(Math.ceil(stringToNumber(screenValue.value)));
  }
  // round function
  function roundOffFunction() {
    let temp = screenValue.value;
    let n = temp.replaceAll("round", "");
    screenValue.value = String(Math.round(stringToNumber(screenValue.value)));
  }
  // sign function
  function signFunction() {
    let temp = screenValue.value;
    let n = temp.replaceAll("sign", "");
    screenValue.value = String(Math.sign(stringToNumber(screenValue.value)));
  }

  // trunc function
  function truncFunction() {
    let temp = screenValue.value;
    let n = temp.replaceAll("trunc", "");
    screenValue.value = String(Math.trunc(stringToNumber(screenValue.value)));
  }
  // square root function
  function squareRootFunction() {
    let n = screenValue.value.substring(1);
    console.log(n);
    screenValue.value = String(Math.sqrt(stringToNumber(screenValue.value)));
  }

  // factorial
  function factorialFunction() {
    let size:number = screenValue.value.length;
    let n:number = Number(screenValue.value.substring(0, size - 1));
    let f:number = 1;
    let i:number;

    for (i = 2; i <= n; i++) f = f * i;
    screenValue.value = String(f);
  }

  try {
    screenValue.value = eval(screenValue.value);
  } catch (err) {
    alert("Enter the valid Input");
  }
};

//Clear Value
function clr() {
  screenValue.value = "";
}

//delete single value
function del() {
  screenValue.value = screenValue.value.slice(0, -1);
}

const ms = [];
var index = 0;
function memory(x) {
  if (x == "mplus") {
    ms.push(parseInt(screenValue.value));
    screenValue.value = "";
    console.log(ms);
  } else if (x == "msub") {
    let temp = "-" + screenValue.value;
    ms.push(parseInt(temp));
    screenValue.value = "";
    console.log(ms);
  } else if (x == "mclear") {
    ms.splice(0, ms.length);
    screenValue.value = "";
    console.log(ms);
  } else if (x == "mrecall") {
    var sum = ms.reduce(function (a, b) {
      return a + b;
    }, 0);
    console.log("total" + sum);
    screenValue.value = sum;
  } else if (x == "mstore") {
    if (ms.length == 0) {
      alert("Nothing is stored in memory");
    } else {
      index %= ms.length;
      screenValue.value = ms[index];
      index++;
    }
  }
}

