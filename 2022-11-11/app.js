// Task 1 - Get key/value pairs as arrays
  // Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

  // Example:
  // keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

    // Solution
    function keysAndValues(data){
      return [Object.keys(data), Object.values(data)]
    }

    // Tests
    keysAndValues({a: 1, b: 2, c: 3}) // [['a', 'b', 'c'], [1, 2, 3]]
    keysAndValues({}) // [[], []]
    keysAndValues({1: 'a', 2: 'b', 3: 'c'}) // [['1', '2', '3'], ['a', 'b', 'c']]