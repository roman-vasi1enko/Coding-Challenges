// Task 1 - Drink about
  // Kids drink toddy.
  // Teens drink coke.
  // Young adults drink beer.
  // Adults drink whisky.
  // Make a function that receive age, and return what they drink.

  // Rules:
  // Children under 14 old.
  // Teens under 18 old.
  // Young under 21 old.
  // Adults have 21 or more.
  // Examples: (Input --> Output)

  // 13 --> "drink toddy"
  // 17 --> "drink coke"
  // 18 --> "drink beer"
  // 20 --> "drink beer"
  // 30 --> "drink whisky"

    // Solution
    function peopleWithAgeDrink(old) {
      return (
        old < 14 ? 'drink toddy' : 
          old < 18 ? 'drink coke' : 
            old < 21 ? 'drink beer' : 'drink whisky'
      );
    };
    
    // Test
    peopleWithAgeDrink(22) //'drink whisky'


// Task 2 - What's the real floor?
  // Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
  // Write a function that given a floor in the american system returns the floor in the european system.
  // With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
  // Basements (negatives) stay the same as the universal level.
  
  // Examples
  // 1  =>  0 
  // 0  =>  0
  // 5  =>  4
  // 15  =>  13
  // -3  =>  -3

    // Solution
    function getRealFloor(n) {
      return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
    }

    // Tests
    getRealFloor(1) //0
    getRealFloor(5) //4
    getRealFloor(15) //13


// Task 3 - Multiplication Table for Number
  // Your goal is to return multiplication table for number that is always an integer from 1 to 10.

  // For example, a multiplication table (string) for number == 5 looks like below:
  // 1 * 5 = 5
  // 2 * 5 = 10
  // 3 * 5 = 15
  // 4 * 5 = 20
  // 5 * 5 = 25
  // 6 * 5 = 30
  // 7 * 5 = 35
  // 8 * 5 = 40
  // 9 * 5 = 45
  // 10 * 5 = 50
  // P. S. You can use \n in string to jump to the next line.
  // Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

    // Solution
    function multiTable(number) {
      let table = '';
      for (let i = 1; i <= 10; i++) {
        table+=`${i} * ${number} = ${i * number}\n`
      }
      return table.trimEnd('\n');
    }

    // Tests
    multiTable(5) //1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'
    multiTable(1) //1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10'