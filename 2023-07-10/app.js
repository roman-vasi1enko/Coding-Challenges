// Task - Are they square?
  // Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

  // Your function should return true if all elements in the array are square numbers and false if not.

  // An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

  // Examples:

  // isSquare([1, 4, 9, 16]) --> true

  // isSquare([3, 4, 7, 9]) --> false

  // isSquare([]) --> undefined
  // is_square([1, 4, 9, 16]) --> True

  // is_square([3, 4, 7, 9]) --> False

  // is_square([]) --> None

    // Solution
    let isSquare = arr => arr.length === 0 ? undefined : arr.every(el => Math.sqrt(el) % 1 === 0)


    // Tests
    console.log(isSquare([1, 4, 9, 16, 25, 36]), true);
    console.log(isSquare([1, 2, 3, 4, 5, 6]), false);
    console.log(isSquare([]), undefined);
    console.log(isSquare([1, 2, 4, 15]), false); 