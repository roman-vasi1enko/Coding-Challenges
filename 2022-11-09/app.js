// Task 1 - Minimize Sum Of Array
  // Notes
  // Array/list will contain positives only .
  // Array/list will always have even size
  // Input >> Output Examples
  // minSum({5,4,2,3}) ==> return (22) 
  // Explanation:
  // The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
  // minSum({12,6,10,26,3,24}) ==> return (342)
  // Explanation:
  // The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
  // minSum({9,2,8,7,5,4,0,6}) ==> return (74)
  // Explanation:
  // The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

    // Solution
    function minSum(arr) {
      arr.sort((a,b) => b - a);
      let big = arr.slice(0, (arr.length / 2));
      let small = arr.splice(arr.length / 2, arr.length - 1).reverse();
      let result = 0;
      
      for (let i = 0; i < big.length; i++) {
        result += big[i] * small[i]
      }
      return result;
    }

    // Tests
    minSum([5,4,2,3]) // 22
    minSum([12,6,10,26,3,24]) // 342
    minSum([9,2,8,7,5,4,0,6]) // 74