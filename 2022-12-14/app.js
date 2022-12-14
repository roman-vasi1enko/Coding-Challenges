// Task - Is your period late?
  // Our function will take three parameters:
  // last - The Date object with the date of the last period
  // today - The Date object with the date of the check
  // cycleLength - Integer representing the length of the cycle in days
  // Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

    // Solution
    function periodIsLate(last, today, cycleLength) {
      let timeDiff = today.getTime() - last.getTime()
      return timeDiff / (1000 * 3600 * 24) > cycleLength;
    }

    // Tests
    console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35), 'false')
    console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28), 'true')