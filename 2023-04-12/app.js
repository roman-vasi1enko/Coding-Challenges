// Task - Formatting decimal places
  // Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

  // Don't round the numbers! Just cut them after two decimal places!

  // Right examples:  
  // 32.8493 is 32.84  
  // 14.3286 is 14.32

  // Incorrect examples (e.g. if you round the numbers):  
  // 32.8493 is 32.85  
  // 14.3286 is 14.33

    // Solution
    function twoDecimalPlaces(number) {
      return Number(number.toFixed(4).slice(0, -2));
    }

    // Tests
    console.log(twoDecimalPlaces(10.1289767789), 10.12, "didn't work for 10.1289767789");
    console.log(twoDecimalPlaces(-7488.83485834983), -7488.83, "didn't work for -7488.83485834983");
    console.log(twoDecimalPlaces(4.653725356), 4.65, "didn't work for 4.653725356");