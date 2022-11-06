// Task 1 - Reverse a Number
  // Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

  // Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

  // Examples
  //  123 ->  321
  // -456 -> -654
  // 1000 ->    1

    // Solution
    function reverseNumber(n) {
      let reversed = num => Number(String(num).split('').reverse().join(''));
      
      return n === Math.abs(n) ? reversed(n) : -reversed(-n);
    }

    // Tests
    reverseNumber(123) // 321
    reverseNumber(-123) // -321, 'Negative Numbers should be preserved'
    reverseNumber(1000) // 1, 'Should handle numbers ending with "0"'
    reverseNumber(4321234) // 4321234
    reverseNumber(5) // 5
    reverseNumber(0) // 0
    reverseNumber(98989898) // 89898989