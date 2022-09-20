// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

const number = function(arry) {
  return arr.map(function(item, index)) { 
    return `${index+1}: ${item}`; //using simple string interpolation to add on to each index element
  }
}
// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

function arr(num) { 
  if(num === undefined){ //if there is no number defined just end the loop early
    return [];
  }
  const result = []; //start with an empty array that we will fill using the for loop
  for (let i = 0; i < num; i++) { 
    result.push(i); //pushes i into every index up to the length of the array defined by num
  }
  return result;
  
}
// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
  if(drone.length > lamps.length) {
    return "o".repeat(lamps.length); 
  } return "o".repeat(drone.length) + "x".repeat(lamps.length-drone.length)
  }
// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

function reverse(arr) {
  let output = [];
  while (arr.length) {
    output.unshift(arr.pop());
  }

  return output;
}
