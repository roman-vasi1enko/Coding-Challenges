// Task - Length and two values
  // Given an integer n and two other values, build an array of size n filled with these two values alternating.

  // Examples
  // 5, true, false     -->  [true, false, true, false, true]
  // 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
  // 0, "one", "two"    -->  []

    // Solution
    function alternate(n, first, second){
      let result = [];
      while(result.length < n) {
        result.push(first, second)
      }
      return result.slice(0,n);
    }

    // Tests
    console.log(alternate(5, true, false), [true, false, true, false, true])
    console.log(alternate(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'])
    console.log(alternate(0, "lemons", "apples"), [])