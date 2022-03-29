// Task 1 - Find Capitals
  //Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

  // Solution
  let capitals = function (word) {
    let result = [];
    word.split('').forEach((e, i) => e === e.toUpperCase() ? result.push(i) : null);
    return result;
  };

  // Test
  capitals('hEllO wOrld') //[1,4,7]