// Task - Array Leaders
  // Given an array/list [] of integers , Find all the LEADERS in the array.

  // Notes
  // Array/list size is at least 3 .
  // Array/list's numbers Will be mixture of positives , negatives and zeros
  // Repetition of numbers in the array/list could occur.
  // Returned Array/list should store the leading numbers in the same order in the original array/list .

  // Input >> Output Examples
  // arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
  // Explanation:
  // 4 is greater than the sum all the elements to its right side

  // Note : The last element 0 is equal to right sum of its elements (abstract zero).

    // Solution
    function arrayLeaders(nums){
      return nums.filter((n, i) => n > nums.slice(i+1).reduce((sum, num) => sum + num, 0))
    }

    // Tests
    comsole.log(arrayLeaders([1,2,3,4,0]), [4]);
    comsole.log(arrayLeaders([16,17,4,3,5,2]), [17,5,2]);
    comsole.log(arrayLeaders([-1,-29,-26,-2]), [-1]);
    comsole.log(arrayLeaders([-36,-12,-27]),  [-36,-12]);
    comsole.log(arrayLeaders([5,-2,2]), [5,2]);
    comsole.log(arrayLeaders([0,-1,-29,3,2]),  [0,-1,3,2]);