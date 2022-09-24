// Task - No oddities here
  // Write a small function that returns the values of an array that are not odd.

  // All values in the array will be integers. Return the good values in the order they are given.

    // Solution
    function noOdds( values ){
      return values.filter(val => val % 2 === 0)
    }

    // Tests
    noOdds([0,1]) // [0]
    noOdds([0,1,2,3]) // [0,2]