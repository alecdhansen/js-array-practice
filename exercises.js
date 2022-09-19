// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i
// where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

// const sunshine = ('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];

function myNewFunction(str, i) {
  const result = [];
  for (let j = 0; j < i; j++) {
    result.push(str);
  }
  return result;
}
// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------
const myArray1 = [2, 3, 4, 5, 6];

function reversal(arr) {
  return arr.slice().reverse();
}

reversal(myArray1);
// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------
const myArray2 = [2, NaN, false, 4, 0, null];

function removal(arr) {
  return arr.filter(a => Boolean(a));
  }

removal(myArray2);

  // -----COULD ALSO USE----- //

function removal(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] {
        result.push(arr[i]);
      }
    }
  }

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------
const myArray3 = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];

function turnIntoObject(arr) {
  const result = {}; //has to be an empty object, not an array
  for (let i = 0; i < arr.length; i++) {
    result[arr[i][0]] = arr [i][1]; //keeps looping through nested arrays to create the object
  }
  return result;
}

turnIntoObject(myArray3);

//-----COULD ALSO USE----- //
function turnIntoObject2(arr) {
  return Object.fromEntries(arr); //look this up on MDN.
}

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------
const myArray4 = [1,2,3,4,5,4,3];

function removeDuplicates(arr){
    let noDuplicateArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (noDuplicateArray.indexOf(arr[i]) === -1) { //takes elements of arr if they're not in my noDuplicateArray and adds them, won't add duplicates cause they've already been added when you loop through again
            noDuplicateArray.push(arr[i]);
        }
    }
    return noDuplicateArray;
}

removeDuplicates(myArray4);
// -----------------------------------------------


// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

//use the sort() method

function compareArrays(arr1, arr2){
  if(arr1.length !== arr2.length) {
    return false; //adds a check and ends comparison early if they aren't equal lengths
  } 
  arr1.sort();
  arr2.sort(); //sorts the arrays so the numbers will match up

  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false; //compares at each index
    }
  }
return true;
}
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------

// -----------------------------------------------
