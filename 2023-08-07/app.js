// Task - Find the unique number
  // There is an array with some numbers. All numbers are equal except for one. Try to find it!

  // findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  // findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
  // It’s guaranteed that array contains at least 3 numbers.

    // Solution
    function findUniq(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] && arr[i + 1] === arr[i + 2]) {
          return arr[i];
        }
        if (arr[i] === arr[i+2] && arr[i] !== arr[i+1]) {
          return arr[i+1]
        }
        if (arr[i] === arr[i + 1] && arr[i + 1] !== arr[i + 2]) {
          return arr[i+2]
        }
      }
    }

    // Tests
    console.log(findUniq([ 1, 0, 0 ]), 1);
    console.log(findUniq([ 0, 2, 0 ]), 2);
    console.log(findUniq([ 0, 0, 3 ]), 3);
    console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
    console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
    console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);