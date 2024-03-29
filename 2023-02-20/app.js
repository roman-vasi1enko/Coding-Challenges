// Task - Complete The Pattern
  // You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

  // Note: Returning the pattern is not the same as Printing the pattern.
  // Rules/Note:
  // If n < 1 then it should return "" i.e. empty string.
  // There are no whitespaces in the pattern.
  // Pattern:
  // (n)(n-1)(n-2)...4321
  // (n)(n-1)(n-2)...432
  // (n)(n-1)(n-2)...43
  // (n)(n-1)(n-2)...4
  // ...............
  // ..............
  // (n)(n-1)(n-2)
  // (n)(n-1)
  // (n)
  // Examples:
  // pattern(4):

  // 4321
  // 432
  // 43
  // 4
  // pattern(11):

  // 1110987654321
  // 111098765432
  // 11109876543
  // 1110987654
  // 111098765
  // 11109876
  // 1110987
  // 111098
  // 11109
  // 1110
  // 11
  // Hint: Use \n in string to jump to next line

    // Solution
    function pattern(n){
      if (n === 1) return '1'
      let result = [];
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
          result.push(n - j)
        }
        result.push('\n')
      }
      result.pop()
      return result.join('')
    }

    // Tests
    console.log(pattern(1),"1");
    console.log(pattern(2),"21\n2");
    console.log(pattern(5),"54321\n5432\n543\n54\n5");