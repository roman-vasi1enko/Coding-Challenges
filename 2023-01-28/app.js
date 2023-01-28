// Task - Tidy Number
  // A Tidy number is a number whose digits are in non-decreasing order. Given a number, Find if it is Tidy or not.
  // Notes
  // Number passed is always Positive .

  // Return the result as a Boolean

  // Input >> Output Examples
  // tidyNumber (12) ==> return (true)
  // Explanation:
  // The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

  // tidyNumber (32) ==> return (false)
  // Explanation:
  // The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

    // Solution
    function tidyNumber(n){
      return String(n).split('').sort().join('') == n
    }

    // Tests
    console.log(tidyNumber(12),true);
    console.log(tidyNumber(102),false);
    console.log(tidyNumber(9672),false);
    console.log(tidyNumber(2789),true);
    console.log(tidyNumber(2335),true);