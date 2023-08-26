// Task - Letter Combinations of a Phone Number
  // Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

  // A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

  // let digitCombinations = {
  //   '2': 'abc',
  //   '3': 'def',
  //   '4': 'ghi',
  //   '5': 'jkl',
  //   '6': 'mno',
  //   '7': 'pqrs',
  //   '8': 'tuv',
  //   '9': 'wxyz'
  // } 

  // Example 1:

  // Input: digits = "23"
  // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
  // Example 2:

  // Input: digits = ""
  // Output: []
  // Example 3:

  // Input: digits = "2"
  // Output: ["a","b","c"]
  

  // Constraints:

  // 0 <= digits.length <= 4
  // digits[i] is a digit in the range ['2', '9'].

    // Solution
    let letterCombinations = function(digits) {
      if (digits.length === 0) return [];
  
      const digitCombination = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
      let result = [];
      backtrack("", digits, digitCombination, result);
      return result;
  
      function backtrack(combination, nextDigits, digitCombination, result) {
          if (nextDigits.length === 0) {
              result.push(combination);
          } else {
              const letters = digitCombination[nextDigits[0] - '2'];
              for (const letter of letters) {
                  backtrack(combination + letter, nextDigits.slice(1), digitCombination, result);
              }
          }
      }
    };

    // Tests
    console.log(letterCombinations('23'), ["ad","ae","af","bd","be","bf","cd","ce","cf"])
    console.log(letterCombinations('2'), ["a","b","c"])
    console.log(letterCombinations(''), [])