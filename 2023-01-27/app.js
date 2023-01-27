// Task - Product Of Maximums Of Array
  // Given an array/list [] of integers , Find the product of the k maximal numbers.

  // Notes
  // Array/list size is at least 3 .

  // Array/list's numbers Will be mixture of positives , negatives and zeros

  // Repetition of numbers in the array/list could occur.

  // Input >> Output Examples
  // maxProduct ({4, 3, 5}, 2) ==>  return (20)
  // Explanation:
  // Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
  // maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
  // Explanation:
  // Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .

    // Solution
    function maxProduct(numbers, size){
  
      return numbers.sort((a, b) => b - a)
                    .slice(0, size)
                    .reduce((total, num) => total * num, 1)
    }

    // Tests
    console.log(maxProduct([4,3,5], 2), 20);
    console.log(maxProduct([10,8,7,9], 3), 720);
    console.log(maxProduct([8,6,4,6], 3), 288);
    console.log(maxProduct([10,2,3,8,1,10,4], 5), 9600);
    console.log(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5), 247895375);
    console.log(maxProduct([-4,-27,-15,-6,-1], 2), 4);
    console.log(maxProduct([-17,-8,-102,-309], 2), 136);
    console.log(maxProduct([10,3,-27,-1], 3), -30);
    console.log(maxProduct([14,29,-28,39,-16,-48], 4), -253344);
    console.log(maxProduct([1], 1), 1);