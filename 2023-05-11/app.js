// Task - House Numbers Sum
  // A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

  // At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

  // For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.

  // Example
  // For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.

  // The answer was obtained as 5 + 1 + 2 + 3 = 11.

  // Input/Output
  // [input] integer array inputArray

  // Constraints: 5 ≤ inputArray.length ≤ 50, 0 ≤ inputArray[i] ≤ 10.

  // [output] an integer

    // Solution
    function houseNumbersSum(arr) {
      return arr.slice(0, arr.indexOf(0)).reduce((sum, num) => sum + num, 0);
    }

    // Tests
    console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]), 11)
    console.log(houseNumbersSum([4, 2, 1, 6, 0]), 13)
    console.log(houseNumbersSum([4, 1, 2, 3, 0, 10, 2]), 10)
    console.log(houseNumbersSum([0, 1, 2, 3, 4, 5]), 0)