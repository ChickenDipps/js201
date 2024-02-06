/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return "2016662";
}

function fn() {
  return 'Lily';
}

function sn() {
  return 'Cholmondeley';
}

function add(a, b) {
  return a + b

}

function subtract(a, b) {
  return a - b
}

function checkObject(obj) {
  obj.checked = true;
}
// Create a `checkObjectInside` function that accepts an object called `obj` as a parameter and if that object has an object value in its `data` property, it sets *that* inner object's property `checked` to `true`. 
function checkObjectInside(obj) {
  if (obj.data) {
    obj.data.checked = true;
  }

}

//Create an arraySet function that accepts three parameters `arr`, `i` and `n`. The first one is an array and the second one an index. The function should place the value of the third parameter into the array at an index specified by the second parameter, if (and only if) such an index is already in the array. Note that your function does not need to return a value because the array is modified directly.
function arraySet(arr, i, n) {
  if (typeof arr[i] === 'number') {
    if (arr.length >= i + 1) {
      arr[i] = n;
    }
  }

}

//Create a function `addAll` that accepts an array `arr` as a single parameter. Assuming an array of numbers is passed, return the result of adding all those numbers. 
function addAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

  }
  return sum;
}

//Create a function called `larger` that accepts two numbers `a` and `b`, and returns the larger.
function larger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Create a function called `largest` that accepts an array `arr` of numbers and returns the largest number in the array
function largest(arr) {
  let biggest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  if (arr.length === 0) {
    return null;
  } else {
    return biggest;
  }
}

//Create a function called compare that accepts two arrays of numbers (`a` and `b`) and compares the contents. It should return true if the arrays are identical and false otherwise
function compare(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {

    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

//Create a function `addToAll` that accepts an array `arr` and a number `n` as parameters. Assuming an array of numbers is passed, return the same array with the second parameter added to each number within the array - such that ([1,2,3], 1) should return [2,3,4].
function addToAll(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + n;
  }
  return arr;
}

//Create a function `rememberThis` with one parameter `keepsake` which should be stored in a global variable called 'remembered' (which you need to declare). Each subsequent call to rememberThis should overwrite the value of 'remembered'.
let remembered;
function rememberThis(keepsake) {
  remembered = keepsake;
}

//Write a function `nArray` that takes a parameter `n` and returns an array with `n` numbers. The numbers in the array should increase from 1 to `n`.
function nArray(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

//Create a function `addAllOpt` that sums an array (`arr`). If the array is not present or empty, return 0
function addAllOpt(arr) {
  let sum = 0;
  if (arr === undefined || arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

//Write a function `divisors` that takes takes two parameters `arr` and `div`, an array of numbers and a divisor. Return a new array containing only the numbers in the first array that are exactly divisible by the second parameter
function divisors(arr, div) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % div === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//Write a function `multiples` that takes two parameters `n` and `m`. It should return a new array of length `n` where the numbers inserted increase from 1*m to n*m.
function multiples(n, m) {
  let newArr = [];
  for (let i = 1; i <= n; i++) {
    newArr.push(i * m);
  }
  return newArr;
}