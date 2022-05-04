// Task 1 - Sum the Strings
  // Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

  // Example: (Input1, Input2 -->Output)
  // "4",  "5" --> "9"
  // "34", "5" --> "39"
  // "", "" --> "0"
  // "2", "" --> "2"
  // "-5", "3" --> "-2"
  
  // Notes:
  // If either input is an empty string, consider it as zero.
  // Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

    // Solution
    function sumStr(a,b) {
      return String(Number(a) + Number(b));
    }

    // Tests
    sumStr("4","5") //"9"
    sumStr("34","5") //"39"


// Task 2 - Is it even?
  // In this challenge we are passing a number (n) into a function.
  // Your code will determine if the number passed is even (or not).
  // The function needs to return either a true or false.
  // Numbers may be positive or negative, integers or floats.
  // Floats with decimal part non equal to zero are considered UNeven for this challenge.

    // Solution
    let testEven = n => Math.abs(n) % 2 == 0 ? true : false;

    // Tests
    testEven(0) //true, "testEven for 0"
    testEven(0.5) //false, "testEven for 0.5"
    testEven(1) //false, "testEven for 1"
    testEven(2) //true, "testEven for 2"
    testEven(-4) //true, "testEven for 2"