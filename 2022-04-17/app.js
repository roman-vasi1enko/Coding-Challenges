// Task 1 - Plurals
  //We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// "You only need to worry about english grammar rules, where anything that isn't singular (one of something), it is plural (not one of something)."

// All values will be positive integers or floats, or zero.

  // Solution
  let plural = n => n == 0 || n % 1 !== 0 || n > 1;

  // Tests
  plural(0) //true
  plural(0.5) //true
  plural(1) //false
  plural(100) //true
  plural(Infinity) //true

// Task 2 - 
  //Numbers ending with zeros are boring.

  // They might be fun in your world, but not here.

  // Get rid of them. Only the ending ones.

  // 1450 -> 145
  // 960000 -> 96
  // 1050 -> 105
  // -1050 -> -105
  // Zero alone is fine, don't worry about it. Poor guy anyway

    // Solution
    function noBoringZeros(n) {
      while(n % 10 == 0 && n != 0) { n/=10; }
      return n;
    }

    //Tests
    noBoringZeros(1450) //145
    noBoringZeros(960000) //96
    noBoringZeros(1050) //105