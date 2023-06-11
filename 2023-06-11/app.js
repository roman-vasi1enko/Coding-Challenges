// Task - Difference Of Squares
  // Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

  // Example
  // For example, when n = 10:

  // The square of the sum of the numbers is:

  // (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

  // The sum of the squares of the numbers is: 385

  // Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640

    // Solutions
    function differenceOfSquares(x){
      return x * (x * x - 1) * (3 * x + 2) / 12;
    }

    // Tests
    console.log(differenceOfSquares(5), 170)
    console.log(differenceOfSquares(10), 2640)
    console.log(differenceOfSquares(100), 25164150)