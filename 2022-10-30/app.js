// Task 1 - Sum of Odd Cubed Numbers
  // Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

    // Solution
    function cubeOdd(arr) {
      for (let el of arr) {
        if (typeof el === 'string'){
          return undefined;
        }
      }
      return arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + Math.pow(num, 3), 0)
    }

    // Tests
    cubeOdd([1, 2, 3, 4]) // 28
    cubeOdd([-3,-2,2,3]) // 0
    cubeOdd(["a",12,9,"z",42]) // undefined