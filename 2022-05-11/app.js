// Task 1 - 
  // Given the triangle of consecutive odd numbers:

  // 1
  // 3     5
  // 7     9    11
  // 13    15    17    19
  // 21    23    25    27    29
  // ...

  // Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
  // 1 -->  1
  // 2 --> 3 + 5 = 8

    // Solution
    let rowSumOddNumbers = n => n ** 3;

    // Tests
    rowSumOddNumbers(1) //1
    rowSumOddNumbers(42) //74088

// Task 2 - 
  //Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

  // Example:
  // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
  // None of the arrays will be empty, so you don't have to worry about that!

    // Solution
    function removeEveryOther(arr){
      return arr.filter((e, i) => i % 2 == 0);
    }

    // Tests
    removeEveryOther(['Hello', 'Goodbye', 'Hello Again']) //['Hello', 'Hello Again']
    removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) //[1, 3, 5, 7, 9]
    removeEveryOther([[1, 2]]) //[[1, 2]]
    removeEveryOther([['Goodbye'], {'Great': 'Job'}]) //[['Goodbye']]