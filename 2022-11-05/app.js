// Task 1 - Sum of all arguments
  // Write a function that finds the sum of all its arguments.

  // eg:

  // sum(1, 2, 3) // => 6
  // sum(8, 2) // => 10
  // sum(1, 2, 3, 4, 5) // => 15

    // Solution
    function sum() {
      return [...arguments].reduce((sum, n) => sum + n, 0);
    }

    // Tests
    sum(1) // 1
    sum(1, 2) // 3
    sum(5, 7, 9) // 21
    sum(12, 1, 1, 1, 1) // 16
    sum(12, 1, 1, 1, 1, 1, 1) // 18