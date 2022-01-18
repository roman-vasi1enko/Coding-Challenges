// Task 1 - Hex to Decimal
  // Complete the function which converts hex number (given as a string) to a decimal number.

    // Solution
    function hexToDec(hexString){
      return parseInt(hexString, 16);
    }

    // Tests
    hexToDec("1") //1
    hexToDec("a") //10
    hexToDec("10") //16
    hexToDec("FF") //255
    hexToDec("-C") //-12