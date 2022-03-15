// Task 1 - You only need one
  // *** No Loops Allowed ***

  // You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

  // Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

    // Solution
    function check(a,x){
      return a.includes(x);
    };

    // Tests
    check([66, 101], 66) // true
    check([80, 117, 115, 104, 45, 85, 112, 115], 45) // true
    check(['t', 'e', 's', 't'], 'e') // true
    check(['what', 'a', 'great', 'kata'], 'kat') // false