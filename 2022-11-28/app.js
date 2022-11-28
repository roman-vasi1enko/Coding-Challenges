// Task - Bit Counting
  // Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

  // Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

    // Solution
    let countBits = function(n) {
      return n.toString(2).split('0').join('').length
    };

    // Tests
    countBits(0) // 0
    countBits(4) // 1
    countBits(7) // 3
    countBits(9) // 2
    countBits(10) // 2