// Task 1 - Sort and Star
  // You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
  // The returned value must be a string, and have "***" between each of its letters.
  // You should not remove or add elements from/to the array.

    // Solution 
    let twoSort = s => s.sort()[0].split('').join('***');

    // Tests
    twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) //'b***i***t***c***o***i***n'
    twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) //'a***r***e'


// Task 2 - Terminal game move function
  // In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
  // Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

  // Example:
  // move(3, 6) should equal 15

    // Solution
    const move = (position, roll) => roll * 2 + position;

    // Tests
    move(0, 4) //8
    move(3, 6) //15
    move(2, 5) //12


// Task 3 - Check for factor
  // This function should test if the factor is a factor of base.
  // Return true if it is a factor or false if it is not.

    // Solution
    function checkForFactor (base, factor) {
      return base % factor === 0 ? true : false;
    }

    // Tests
    checkForFactor(10,2) //true
    checkForFactor(63,7) //true
    checkForFactor(2450,5) //true
    checkForFactor(24612,3) //true
    checkForFactor(9,2) //false
    checkForFactor(653,7) //false
    checkForFactor(2453,5) //false
    checkForFactor(24617,3) //false