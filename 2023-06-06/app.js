// Task - Correct the time-string
  // You have to create a method, that corrects a given time string.
  // There was a problem in addition, so many of the time strings are broken.
  // Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
  // Examples
  // "09:10:01" -> "09:10:01"  
  // "11:70:10" -> "12:10:10"  
  // "19:99:99" -> "20:40:39"  
  // "24:01:01" -> "00:01:01"  

    // Solution
    function timeCorrect(timestring) {
      if (!timestring) return timestring;
    
      const [h, m, s] = timestring.split(":").filter(x => !Number.isNaN(+x));
      if (!s) return null;
      
      return new Date(2023, 1, 1, +h, +m, +s).toTimeString().slice(0, 8);
    }

    // Tests
    console.log(timeCorrect(null), null);
    console.log(timeCorrect(""), "");
    console.log(timeCorrect("09:10:01"), "09:10:01");
    console.log(timeCorrect("11:70:10"), "12:10:10");