// Task - Maximum Product
  // Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

  // Notes
  // Array/list size is at least 2.

  // Array/list numbers could be a mixture of positives, negatives also zeroes .

  // Input >> Output Examples
  // adjacentElementsProduct([1, 2, 3]); ==> return 6
  // Explanation:
  // The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
  // adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
  // Explanation:
  // Max product obtained from multiplying 5 * 10  =  50 .

  // adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
  // Explanation:
  // The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

    // Solution
    function adjacentElementsProduct(array) {
      let result = -Infinity;
      array.map((num, index) => (num * array[index + 1]) > result ? result = num * array[index + 1] : num);
      return result;
    }

    // Tests
    adjacentElementsProduct([3, 6, -2, -5, 7, 3]) // 21
    adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]) // 50
    adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]) // 30
    adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]) // -14
    adjacentElementsProduct([5, 1, 2, 3, 1, 4]) // 6
    adjacentElementsProduct([1, 0, 1, 0, 1000]) // 0