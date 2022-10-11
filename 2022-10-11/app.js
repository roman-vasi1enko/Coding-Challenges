// Task - Factorial
  // Your task is to write function factorial.

    // Solution
    function factorial(n){
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * factorial(n - 1)
    }

    // Tests
    factorial(0) // 1
    factorial(1) // 1
    factorial(4) // 24
    factorial(7) // 5040
    factorial(17) // 355687428096000