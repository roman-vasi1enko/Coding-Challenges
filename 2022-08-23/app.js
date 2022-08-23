// Task - Gauß needs help! (Sums of a lot of numbers).
  // Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

  // Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

  // Here's, an example:

  // f(n=100) // returns 5050 
  // It's your duty to verify that n is a valid positive integer number. If not, please, return false.

    // Solution
    function f(n){
      if (!n || !Number.isInteger(n) || n <= 0) {
        return false;
      }
      else {
        let result = 0;
        for (let i = 0; i <= n; i++) {
          result += i;
        }
        return result;
      }
    };

    // Tests
    f(100) // 5050
    f(300) // 45150
    f(50000) // 1250025000
    f('n') // false, "n must be a number"
    f() // false, "n must be a value"
    f(3.14) // false, "n must be an integer"
    f(0) // false, "a value of n greater than 0 is required"
    f(-10) // false, "a positive value of n is required"