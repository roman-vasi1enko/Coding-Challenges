// Task - A square of squares
    // Given an integral number, determine if it's a square number:
    // In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

    // The tests will always use some integral number, so don't worry about that in dynamic typed languages.

    // Examples
    // -1  =>  false
    //  0  =>  true
    //  3  =>  false
    //  4  =>  true
    // 25  =>  true
    // 26  =>  false

      // Solution
      let isSquare = n => Number.isInteger(Math.sqrt(n));

      // Tests
      isSquare(-1) // false, '-1: Negative numbers cannot be square numbers'
      isSquare( 0) // true, '0 is a square number (0 * 0)'
      isSquare( 3) // false, '3 is not a square number'
      isSquare( 4) // true, '4 is a square number (2 * 2)'
      isSquare(25) // true, '25 is a square number (5 * 5)'
      isSquare(26) // false, '26 is not a square number'