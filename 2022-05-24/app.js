// Task 1 - Find the average age
  // You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

  // Given the following input array:
  let listX = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ];
  // write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

  // Notes:
  // The input array will always be valid and formatted as in the example above.
  // Age is represented by a number which can be any positive integer.

    // Solution
    function getAverageAge(list) {
      let avgAge = 0;
      list.forEach(dev => avgAge += dev.age);
      return Math.round(avgAge / list.length);
    }

    // Tests
    let list1 = [
      { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
      { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
    ];
    getAverageAge(list1) //50
    
    let list2 = [
      { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
      { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
    ];
    getAverageAge(list2) //21
    