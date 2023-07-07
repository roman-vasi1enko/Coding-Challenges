// Task - Find the Squares
  // Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

  // Examples
  // 9  -->  "25-16"
  // 5  -->  "9-4"
  // 7  -->  "16-9"

    // Solution
    function findSquares(num) {
      let max = Math.ceil(num / 2);
      let min = num - max;

      return `${max * max}-${min * min}`;
    };

    // Tests
    console.log(findSquares(9), '25-16');
    console.log(findSquares(5), '9-4');
    console.log(findSquares(81), '1681-1600');
    console.log(findSquares(25), '169-144');