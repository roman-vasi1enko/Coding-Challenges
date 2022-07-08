// Task - Km/h -> M/sec
  // The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

  // For example:
  // 1.08 --> 30

    //Solution
    function cockroachSpeed(s) {
      return Math.floor(s * 27.778);
    }

    //Tests
    cockroachSpeed(1.08) //30
    cockroachSpeed(1.09) //30
    cockroachSpeed(0) //0