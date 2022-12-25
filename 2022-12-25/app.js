// Task - Greet me
  // Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

  // Example:
  // "riley" --> "Hello Riley!"
  // "JACK"  --> "Hello Jack!"

    // Solution
    let greet = name => `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;

    // Tests
    console.log(greet('riley'), 'Hello Riley!');