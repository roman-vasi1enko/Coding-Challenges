// Task - Sum of differences in array
  // Your task is to sum the differences between consecutive pairs in the array in descending order.

  // Example
  // [2, 1, 10]  -->  9
  // In descending order: [10, 2, 1]

  // Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

    // Solution
    function sumOfDifferences(arr) {
      let result = [];
      arr.sort((a, b) => b - a);
      for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] - arr[i + 1]);
      }
      return result.reduce((sum, num) => sum + num, 0);
    }

    // Solution (ES6)
    function sumOfDifferences(arr) {
      return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
    }

    // Tests
    sumOfDifferences([1, 2, 10]) // 9
    sumOfDifferences([-3, -2, -1]) // 2
