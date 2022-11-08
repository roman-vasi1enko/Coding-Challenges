// Task 1 - Ordered Count of Characters
  // Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

  // Consult the solution set-up for the exact data structure implementation depending on your language.

  // Example:

  // orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

    // Solution
    const orderedCount = str => [...new Set([...str])].map(char => [char, str.split(char).length - 1])


    // Tests
    orderedCount('abracadabra') // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
    orderedCount('233312') // [['2', 2], ['3', 3], ['1', 1 ]]