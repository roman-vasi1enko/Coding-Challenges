// Task - Filter the number
  // Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

  // Task
  // Your task is to return a number from a string.

  // Details
  // You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

    // Solution
    let filterString = function(value) {
      return Number(value.split('').filter(char => Number(char) || char === '0').join(''));
    }

    // Tests
    filterString("123") // 123, 'Just return the numbers'
    filterString("a1b2c3") // 123, 'Just return the numbers'
    filterString("aa1bb2cc3dd") // 123, 'Just return the numbers'