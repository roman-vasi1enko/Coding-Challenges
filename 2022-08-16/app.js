// Task - Summing a number's digits
  // Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

  // For example: (Input --> Output)

  // 10 --> 1
  // 99 --> 18
  // -32 --> 5
  // Let's assume that all numbers in the input will be integer values.

    // Solution
    function sumDigits(number) {
      return Math.abs(number).toString().split('').reduce((sum, num) => sum + +num, 0);
    }

    // Tests
    sumDigits(10) // 1
    sumDigits(99) // 18
    sumDigits(-32) // 5