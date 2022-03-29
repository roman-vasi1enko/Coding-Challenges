// Task 1 - Odd or Even?
  // Given a list of integers, determine whether the sum of its elements is odd or even.

  // Give your answer as a string matching "odd" or "even".

  // If the input array is empty consider it as: [0] (array with a zero).

  // Examples:
  // Input: [0]
  // Output: "even"

  // Input: [0, 1, 4]
  // Output: "odd"

  // Input: [0, -1, -5]
  // Output: "even"

    // Solution
    function oddOrEven(array) {
      return array.reduce((sum, n) => sum + n, 0) % 2 == 0 ? 'even' : 'odd';
    }

    // Tests
    oddOrEven([0]) //'even'
    oddOrEven([1]) //'odd'
    oddOrEven([0, 1, 5]) //'even'
    oddOrEven([0, 1, 2]) //'odd'
    oddOrEven([-1023, -1, 3]) //'odd'

// Task 2 - Array.diff
  // Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

  // It should remove all values from list a, which are present in list b keeping their order.

  // arrayDiff([1,2],[1]) == [2]
  // If a value is present in b, all of its occurrences must be removed from the other:

  // arrayDiff([1,2,2,2,3],[2]) == [1,3]

    // Solution
    function array_diff(a, b) {
      return a.filter(e => !b.includes(e));
    }

    // Tests
    arrayDiff([1,2], [1]) //[2]
    arrayDiff([1,2,2], [1]) //[2,2]
    arrayDiff([1,2,2], [2]) //[1]
    arrayDiff([1,2,2], []) //[1,2,2]
    arrayDiff([], [1,2]) //[]
    arrayDiff([1,2,3], [1,2]) //[3]