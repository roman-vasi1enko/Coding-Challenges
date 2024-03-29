// Task - Find the odd int
  // Given an array of integers, find the one that appears an odd number of times.

  // There will always be only one integer that appears an odd number of times.

  // Examples
  // [7] should return 7, because it occurs 1 time (which is odd).
  // [0] should return 0, because it occurs 1 time (which is odd).
  // [1,1,2] should return 2, because it occurs 1 time (which is odd).
  // [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
  // [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

    // Solution
      // P: array of nums
      // R: number

      function findOdd(arr) {
        var obj = {};
        arr.forEach(function(el){
          obj[el] ? obj[el]++ : obj[el] = 1;
        });
        
        for(num in obj) {
          if(obj[num] % 2 !== 0) return Number(num);
        }
      }

      // E: findOdd([7]) // 7

    // Tests
    findOdd([7]) // 7
    findOdd([0]) // 0
    findOdd([1,1,2]) // 2
    findOdd([0,1,0,1,0]) // 0
    findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]) // 4
    findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) // 5
    findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) // -1
    findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]) // 5
    findOdd([10]) // 10
    findOdd([1,1,1,1,1,1,10,1,1,1,1]) // 10
    findOdd([5,4,3,2,1,5,4,3,2,10,10]) // 1