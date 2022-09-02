// Task - Sum of Cubes
  // Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

  // Assume that the input n will always be a positive integer.

  // Examples: (Input --> output)

  // 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
  // 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

    // Solution
    function sumCubes(n){
      if (n === 1) {
        return n ** 3;
      } 
      else {
        return n ** 3 + sumCubes(n - 1);
      }
    }

    // Tests
    sumCubes(1) // 1
    sumCubes(2) // 9
    sumCubes(3) // 36
    sumCubes(123) // 58155876