// Task - Get decimal part of the given number
  // Write a function that returns only the decimal part of the given number.

  // You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

  // Examples
  // getDecimal(2.4)  === 0.4
  // getDecimal(-0.2) === 0.2

  // Solutions
  function getDecimal(n){
    let arr = String(n).split('.')
    return arr.length >= 2 ? Number(`0.${arr[1]}`) : 0;
  }

  // Tests
  console.log(getDecimal(2.4)  === 0.4) // true
  console.log(getDecimal(-0.2) === 0.2) // true
  console.log(getDecimal(10) === 0) // true