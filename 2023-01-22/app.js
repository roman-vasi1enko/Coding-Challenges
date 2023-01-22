// Task - Debug Sum of Digits of a Number
  // Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

  // Example
  // 123  => 6
  // 223  => 7
  // 1337 => 14

  // Debug this:
  // function getSumOfDigits(integer) {
  //   var sum = null;
  //   var digits =  Math.floor(integer).toString();
  //   for(var ix = 1; ix < digits.length; ix = sum + 1) {
  //     sum =+ digits[ix + 1]);
  //   }
  //   return sum;
  // }

    // Solution
    function getSumOfDigits(integer) {
      return String(integer).split('').map(Number).reduce((sum, num) => sum + num, 0)
    }

    // Tests
    console.log(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
    console.log(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
    console.log(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');