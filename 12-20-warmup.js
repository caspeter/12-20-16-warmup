'use strict';
var array = [1,3,2,4,5,6,7,8];

//CORRECT WAY

// temp = arr[x];
// arr[x] = arr[y];
// arr[y] = temp;

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
  return arr;
}

console.log("Swap:", swap(array, 1, 2));

function reverse(arr) {
  let arrLength = arr.length-1;
  for (var i = 0; i < arr.length; i++) {
    if (i < arrLength/2) {
      swap(arr, i, arrLength-i);
    }
  }
  return arr;
}
console.log('Reverse:', reverse(array));


///////////////////////////////////////////

//FIRST TRY:
// SWAP FUNCTION
//inputs: arr and two indices
//Output: the array with the two numbers at the indices swapped for eachother
function swap2(arr, a, b) {
  let firstVal = arr[a];
  let secondVal = arr[b];
  for (var i = 0; i < arr.length; i++) {
    if (i === a) {
      arr[i] = secondVal;
    } else if (i === b) {
      arr[i] = firstVal;
    }
  }
  return arr;
}
// console.log("Swap:", swap(array, 1, 2));

//REVERSE FUNCTION
function reverse(arr) {
  let arrLength = arr.length-1;
  for (var i = 0; i < arr.length; i++) {
    if (i < arrLength/2) {
      swap2(arr, i, arrLength-i);
    }
  }
  return arr;
}
// console.log('Reverse:', reverse(array));
