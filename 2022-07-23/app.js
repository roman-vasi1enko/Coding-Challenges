// Task 1 - Sum of Numbers
  // Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

  // Note: a and b are not ordered!

  // Examples (a, b) --> output (explanation)
  // (1, 0) --> 1 (1 + 0 = 1)
  // (1, 2) --> 3 (1 + 2 = 3)
  // (0, 1) --> 1 (0 + 1 = 1)
  // (1, 1) --> 1 (1 since both are same)
  // (-1, 0) --> -1 (-1 + 0 = -1)
  // (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

    // Solution
    function getSum( a,b ) {
      let result = 0;
      
      if (b < a) {
        for (let i = a; i >= b; i--) {
         result += i;
        }
      }
      else {
        for (let i = a; i <= b; i++) {
         result += i;
        }
      }
      
      return result;
    }

    // Tests
    getSum(0,-1) // -1
    getSum(0,1) // 1