// CHALLENGE 1
function createFunction() {
  function sayHello() {
    console.log("hello");
  }
  return sayHello;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  function printInput() {
    console.log(input);
  }
  return printInput;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter("sample");
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter("hello");
// printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  let step = x;
  function add(start) {
    // console.log("addByX", start + step);
    return start + step;
  }
  return add;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function once(callback) {
  let output;
  let counter = 0;

  function callOnce(x) {
    if (counter > 0) {
      return output;
    } else {
      counter++;
      output = callback(x);
      return output;
    }
  }
  return callOnce;
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5
function after(count, func) {
  let counter = 0;
  let output;

  function callNTimes(x) {
    counter++;
    if (counter < count) {
      return output;
    } else {
      output = func(x);
      return output;
    }
  }

  return callNTimes;
}

// /*** Uncomment these to check your work! ***/
// const called = function () {
//   console.log("hello");
// };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait, ...params) {
  setTimeout(function () {
    func(...params);
  }, wait);
}

// const cb = function (...params) {
//   console.log("called!", ...params);
// };
// delay(cb, 2000); // "called!" printed after 1000 ms
// delay(cb, 5000, "param1", "param2"); // "called! param1 param2" printed after 2000 ms

// CHALLENGE 7
function rollCall(names) {
  let counter = 0;
  function callNames() {
    if (counter < names.length) {
      console.log(names[counter]);
      counter++;
    } else {
      console.log("Everyone accounted for");
    }
  }

  return callNames;
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
// rollCaller(); // => should log 'Victoria'
// rollCaller(); // => should log 'Juan'
// rollCaller(); // => should log 'Ruth'
// rollCaller(); // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  const obj = {};

  function log(param) {
    if (param === magicWord) {
      return obj;
    } else {
      obj[param] = func(param);
      return func(param);
    }
  }

  return log;
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function (num) {
//   return num * 2;
// };
// const multBy2AndLog = saveOutput(multiplyBy2, "boo");
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let counter = -1;

  function cycle() {
    counter++;
    return array[counter % array.length];
  }

  return cycle;
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ["Fri", "Sat", "Sun"];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  function fn(...param) {
    return func(arg, ...param);
  }

  return fn;
}

// /*** Uncomment these to check your work! ***/
// const subtract = function (big, small) {
//   return big - small;
// };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  const obj = {};

  function fn(...params) {
    return {
      date: new Date().toDateString(),
      output: func(...params),
    };
  }

  return fn;
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp((n) => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  const obj = {};
  function strings(string1, string2 = "") {
    if (string2 !== "") {
      obj[string1] = string2;
    } else {
      for (const [k, v] of Object.entries(obj)) {
        string1 = string1.replace(k, v);
      }
      return string1;
    }
  }

  return strings;
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene("dogs", "cats");
// changeScene("quick", "slow");
// console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  const obj = {
    secret,
    getSecret: function () {
      return this.secret;
    },
    setSecret: function (newSecret) {
      this.secret = newSecret;
    },
  };

  return obj;
}

// function createSecretHolder(secret) {
//   let privateSecret = secret;

//   function getSecret() {
//     console.log(privateSecret);
//     return privateSecret;
//   }

//   function setSecret(x) {
//     privateSecret = x;
//   }

//   return { getSecret, setSecret };
// }

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5);
// console.log(obj.getSecret()); // => returns 5
// obj.setSecret(2);
// console.log(obj.getSecret()); // => returns 2

// CHALLENGE 14
function callTimes() {
  let counter = 0;

  function times() {
    counter++;
    return counter;
  }

  return times;
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// console.log(myNewFunc1()); // => 1
// console.log(myNewFunc1()); // => 2
// console.log(myNewFunc2()); // => 1
// console.log(myNewFunc2()); // => 2

// CHALLENGE 15
function roulette(num) {
  let n = num;

  function play() {
    n--;
    if (n > 0) {
      return "spin";
    } else if (n === 0) {
      return "win";
    } else {
      return "pick a number and play again";
    }
  }

  return play;
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

// CHALLENGE 16
function average() {
  let list = [];

  function calc(param) {
    if (param) {
      list.push(param);
    }

    let sum = list.reduce((acc, curr) => acc + curr, 0);

    if (list.length > 0) {
      return sum / list.length;
    }
    return 0;
  }
  return calc;
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  function compare(cb) {
    for (arr of arrOfTests) {
      if (cb(arr[0]) !== arr[1]) {
        return false;
      }
    }
    return true;
  }

  return compare;
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(["hello", "hellO"]);
// capLastTestCases.push(["goodbye", "goodbyE"]);
// capLastTestCases.push(["howdy", "howdY"]);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = (str) => str.toUpperCase();
// const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  const arr = [];
  function fn(str) {
    if (str !== "undo") {
      arr.push(str);
      if (arr.length > limit) {
        arr.shift();
      }
      return `${str} done`;
    } else {
      if (arr.length > 0) {
        return `${arr.pop()} undone`;
      }
      return "nothing to undo";
    }
  }

  return fn;
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions("jump")); // => should log 'jump done'
// console.log(myActions("undo")); // => should log 'jump undone'
// console.log(myActions("walk")); // => should log 'walk done'
// console.log(myActions("code")); // => should log 'code done'
// console.log(myActions("pose")); // => should log 'pose done'
// console.log(myActions("undo")); // => should log 'pose undone'
// console.log(myActions("undo")); // => should log 'code undone'
// console.log(myActions("undo")); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  const cards = array;

  function dealer(num1, num2) {
    let bust = false;
    let sum = 0;

    function player() {
      if (bust) {
        return "you are done!";
      }

      if (sum === 0) {
        sum = num1 + num2;
        return sum;
      } else {
        sum += cards.shift();
        if (sum > 21) {
          bust = true;
          return "bust";
        }
        return sum;
      }
    }
    return player;
  }
  return dealer;
}

// /*** Uncomment these to check your work! ***/

/*** DEALER ***/
const deal = blackjack([
  2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

/*** BELOW LINES ARE FOR THE BONUS ***/

/*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

/*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!