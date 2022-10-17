// Task - Formatting decimal places #0
  // Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

  // Example:    
  // 5.5589 is rounded 5.56   
  // 3.3424 is rounded 3.34

    // Solution
    function twoDecimalPlaces(n) {
      return Number(n.toFixed(2));
    }

    // Tests
    twoDecimalPlaces(4.659725356) // 4.66
    twoDecimalPlaces(173735326.3783732637948948) // 173735326.38
    twoDecimalPlaces(4.653725356) // 4.65