// Task - Simple consecutive pairs
  // return the count of pairs that have consecutive numbers as follows:

  // pairs([1,2,5,8,-4,-3,7,6,5]) = 3
  // The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
  // --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
  // --the second pair is (5,8) and are not consecutive
  // --the third pair is (-4,-3), consecutive. Count = 2
  // --the fourth pair is (7,6), also consecutive. Count = 3. 
  // --the last digit has no pair, so we ignore.
  // More examples in the test cases.

    // Solution
    function pairs(arr){
      let result = 0;
    
      for (let i = 0; i <= arr.length; i += 2) {
        Math.abs(arr[i] - arr[i + 1]) === 1 ? result++ : result;
      }
      
      return result;
    };

    // Tests
    pairs([1,2,5,8,-4,-3,7,6,5]) // 3
    pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]) // 2
    pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]) // 0
    pairs([-55, -56, -7, -6, 56, 55, 63, 62]) // 4
    pairs([73, 72, 8, 9, 73, 72]) // 3