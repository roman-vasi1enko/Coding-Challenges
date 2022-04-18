// Task 1 - Name Shuffler
  // Write a function that returns a string in which firstname is swapped with last name.
  //Example: nameShuffler('john McClane'); => "McClane john"

    // Solution
    let nameShuffler = str => str.split(' ').reverse().join(' ');

    // Tests
    nameShuffler('john McClane') //'McClane john'


// Task 2 - 5 without numbers !!
  // Write a function that always returns 5

  // Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

  // Good luck :)

    // Solution
    let unusualFive = _ => ['a', 'b', 'c', 'd', 'e'].length;

    // Test
    unusualFive() //5

// Task 3 - Pre-FizzBuzz Workout
  // This is the first step to understanding FizzBuzz.
  // Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
  // Your expected output is an array of positive integers from 1 to n (inclusive).
  // Your job is to write an algorithm that gets you from the input to the output.

    // Solutution
    function preFizz(n) {
      let arr = [];
      for (let i = 1; i <= n; i++) {
        arr.push(i)
      }
      return arr;
    }

    // Tests
    preFizz(2) //[1,2], `Array should be from 1 to 2
    preFizz(1) //[1], `Array should be from 1 to 1
    preFizz(3) //[1,2,3], `Array should be from 1 to 3
    preFizz(4) //[1,2,3,4], `Array should be from 1 to 4
    preFizz(5) //[1,2,3,4,5], `Array should be from 1 to 5