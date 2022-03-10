// Task 1 - Are arrow functions odd?
  // Time to test your basic knowledge in arrow functions! Return the odds from a list:
  // [1, 2, 3, 4, 5]  --> [1, 3, 5]
  // [2, 4, 6]        --> []
  // []               --> []

    // Solution (arrow function)
    let odds = values => values.filter(num => num % 2 != 0);

    // Tests
    odds([]) // [], "Should handle empty array"
    odds([2, 4, 6]) // [], "Should handle array with even numbers only"
    odds([1, 3, 5]) // [1, 3, 5], "Should handle array with odd numbers only"
    odds([1, 2, 3, 4, 5, 6]) // [1, 3, 5], "Should handle mixed array"
