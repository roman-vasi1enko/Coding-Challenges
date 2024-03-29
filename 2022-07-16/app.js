// Task 1 - Exclusive "or" (xor) Logical Operator
  // In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

  // false xor false == false // since both are false
  // true xor false == true // exactly one of the two expressions are true
  // false xor true == true // exactly one of the two expressions are true
  // true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
  // Task
  // Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

    // Solution
    function xor(a, b) {
      return a && b ? false : a || b;
    }

    // Tests
    xor(false, false) // false, "false xor false === false"
    xor(true, false) // true, "true xor false === true"
    xor(false, true) // true, "false xor true === true"
    xor(true, true) // false, "true xor true === false"
    xor(true, true) // true, "'xor' is NOT identical to 'or'"