// Task - Name Array Capping
  // Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

  // example
  // capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
  // capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

    // Solution
    function capMe(names) {
      return names.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
    }

    // Tests
    console.log(capMe(['jo', 'nelson', 'jurie'])    , ['Jo', 'Nelson', 'Jurie'])
    console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']), ['Karly', 'Daniel', 'Kelsey'])