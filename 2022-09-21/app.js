// Task - esreveR
  // Write a function reverse which reverses a list (or in clojure's case, any list-like data structure) NOT using buil-in 'reverse()' method.

    // Solution
    reverse = function(array) {
      let result = [];
      for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
      }
      return result;
    }

    // Tests
    reverse([1,2,3]) // [3,2,1]
    reverse([1,null,14,"two"]) // ["two",14,null,1]