// Task - Find the sum of all multiples of n below m

  // Keep in Mind
  // n and m are natural numbers (positive integers)
  // m is excluded from the multiples
  
  // Examples
  // sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
  // sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
  // sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
  // sumMul(4, -7)  ==> "INVALID"

    // Solution
    // return the sum of all ints between two nums (ints), 1st inclusive, 2nd not, step = n
    // two nums, + integers, 123
    // return sum or "INVALID" if nums don't satisfy the case above (negative, not int, not num)

    function sumMul(n,m){
      if(n + m < n || n + m === 0 || (n + m) % 1 !== 0) {
        return "INVALID"
      }

      let sum = 0;
      for (let i = n; i < m; i+=n) {
        sum += i
      }
      return sum;
    }

    console.log(sumMul(1,3), 3)
    console.log(sumMul(2,9), 20)
    console.log(sumMul(4, -7), "INVALID")
    console.log(sumMul(3, 9.5), "INVALID")