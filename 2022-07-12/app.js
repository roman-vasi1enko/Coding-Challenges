// Task - Expressions matter
  // Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
  // In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
  
  // Example
  // With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
  // 1 * (2 + 3) = 5
  // 1 * 2 * 3 = 6
  // 1 + 2 * 3 = 7
  // (1 + 2) * 3 = 9
  // So the maximum value that you can obtain is 9.

  // Notes
  // The numbers are always positive.
  // The numbers are in the range (1  ≤  a, b, c  ≤  10).
  // You can use the same operation more than once.
  // It's not necessary to place all the signs and brackets.
  // Repetition in numbers may occur .
  // You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

    // Solution
    function expressionMatter(a, b, c) {
      return Math.max(
        a + b + c,
        a * b * c,
        a * b + c,
        (a + b) * c,
        a * (b + c),
        a + b * c
      )
    }

    // Tests
    expressionMatter(2, 2, 2) // 8
    expressionMatter(1, 6, 1) // 8
    expressionMatter(2, 6, 1) // 14
    expressionMatter(1, 3, 1) // 5
    expressionMatter(6, 7, 1) // 48
    expressionMatter(9, 1, 1) // 18
    expressionMatter(10, 5, 6) // 300
    expressionMatter(1, 10, 1) // 12