// Task - Unlucky Days
  // Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

  // Find the number of Friday 13th in the given year.

  // Input: Year in Gregorian calendar as integer.
  // Output: Number of Black Fridays in the year as an integer.

  // Examples:
  // unluckyDays(2015) == 3
  // unluckyDays(1986) == 1

    // Solution
    function unluckyDays(year){
      let unlucky = 0;
      for (let i = 0; i < 12; i++) {
        if (new Date(year, i, 13).getDay() === 5){
          unlucky++;
        }
      }
      return unlucky;
    }

    // Tests
    unluckyDays(1586) // 1
    unluckyDays(1001) // 3
    unluckyDays(2819) // 2
    unluckyDays(2792) // 2
    unluckyDays(2723) // 2
    unluckyDays(1909) // 1
    unluckyDays(1812) // 2
    unluckyDays(1618) // 2
    unluckyDays(2132) // 1
    unluckyDays(2065) // 3