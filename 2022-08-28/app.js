// Task - Most digits
  // Find the number with the most digits.

  // If two numbers in the argument array have the same number of digits, return the first one in the array.

    // Solution
    function findLongest(array){
      let result = 0;
      array.map(num => num > result && String(num).length > String(result).length ? result = num : result)
      return result;
    }

    // Tests
    findLongest([1, 10, 100]) // 100
    findLongest([9000, 8, 800]) // 9000
    findLongest([8, 900, 500]) // 900