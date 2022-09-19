// Task - Elapsed Seconds
  // Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

    // Solution
    function elapsedSeconds(startDate, endDate){
      return (endDate.getTime() - startDate.getTime()) / 1000;
    }

    // Tests
    const start = new Date(2013, 1, 1, 0, 0, 1);
		const end = new Date(2013, 1, 1, 0, 0, 2);
		const end2 = new Date(2013, 1, 1, 0, 0, 20);
		const end3 = new Date(2013, 1, 1, 0, 1, 20);

		doTest(start, end, 1);
		doTest(start, end2, 19);
		doTest(start, end3, 79);