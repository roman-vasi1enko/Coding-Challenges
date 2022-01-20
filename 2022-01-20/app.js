// Task 1 - Binary to Decimal
  // Complete the function which converts a binary number (given as a string) to a decimal number.

    // Solution
    function binToDec(bin){
      return parseInt(bin, 2);
    }

    // Tests
    binToDec('1') // 1
    binToDec('1001001') // 73