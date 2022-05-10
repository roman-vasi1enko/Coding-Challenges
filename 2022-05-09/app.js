// Task 1 - Jaden Casing Strings
  // Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
  // Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

  // Example:
  // Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
  // Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

    // Solution 
    String.prototype.toJadenCase = function() {
      return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
    };

    // Test
    var str = "How can mirrors be real if our eyes aren't real";
    str.toJadenCase() //"How Can Mirrors Be Real If Our Eyes Aren't Real"


  // Task 2 - Sum of two lowest positive integers
    // Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
    // For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
    // [10, 343445353, 3453445, 3453545353453] should return 3453455.

      // Solution
      function sumTwoSmallestNumbers(numbers) {  
        numbers.sort((a,b) => a - b)
        return numbers[0] + numbers[1]
      }

      // Tests
      sumTwoSmallestNumbers([5, 8, 12, 19, 22]) //13 , "Sum should be 13"
      sumTwoSmallestNumbers([15, 28, 4, 2, 43]) //6 , "Sum should be 6"
      sumTwoSmallestNumbers([3, 87, 45, 12, 7]) //10 , "Sum should be 10"
      sumTwoSmallestNumbers([23, 71, 33, 82, 1]) //24 , "Sum should be 24"
      sumTwoSmallestNumbers([52, 76, 14, 12, 4]) //16 , "Sum should be 16"


// Task 3 - Create Phone Number
  // Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
  // Example
  // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  // The returned format must be correct in order to complete this challenge.
  // Don't forget the space after the closing parentheses!

      // Solution
      function createPhoneNumber(numbers){
        let arr = numbers.join('');
        return `(${arr.slice(0, 3)}) ${arr.slice(3, 6)}-${arr.slice(6)}`
      }

      // Tests
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //"(123) 456-7890"
      createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) //"(111) 111-1111"
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //"(123) 456-7890"