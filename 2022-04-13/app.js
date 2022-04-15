// Task 1 - Difference of Volumes of Cuboids
  // In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

  // For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

  // Your function will be tested with pre-made examples as well as random ones.

    // Solution 1
    function findDifference(a, b) {
      let first = a.reduce((sum, n) => sum * n, 1);
      let second = b.reduce((sum, n) => sum * n, 1);
      return first >= second ? first - second : second - first;
    }

    // Solution 2
    let findDifference = (a, b) => Math.abs(a.reduce((sum, n) => sum * n, 1) - b.reduce((sum, n) => sum * n, 1));

    // Tests
    findDifference([3, 2, 5], [1, 4, 4]) //14
    findDifference([9, 7, 2], [5, 2, 2]) //106
    findDifference([15, 20, 25], [10, 30, 25]) //0

// Task 2 - 
    //Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

    // For example:

    // a = 1
    // b = 4
    // --> [1, 2, 3, 4]

      // Solution: 
      function between(a, b) {
        let arr = [];
        for (let i = a; i <= b; i++) {
          arr.push(i);
        }
        return arr;
      }

      // Tests:
      between(1, 4) //[1, 2, 3, 4]
      between(-2, 2) //[-2, -1, 0, 1, 2]