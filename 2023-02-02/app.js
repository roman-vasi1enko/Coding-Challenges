// Task - Special Number
  // A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

  // Given a number determine if it special number or not.
  // Notes
  // The number passed will be positive (N > 0) .

  // All single-digit numbers within the interval [1:5] are considered as special number.

  // Input >> Output Examples
  // specialNumber(2) ==> return "Special!!"
  // Explanation:
  // It's a single-digit number within the interval [1:5] .

  // specialNumber(9) ==> return "NOT!!"
  // Explanation:
  // Although, it's a single-digit number but Outside the interval [1:5] .

    // Solution 1
    function specialNumber(n){
      return Number(String(n).split('')
                             .filter(num => Number(num) >= 0 && Number(num) <= 5)
                             .join('')) == n ? 'Special!!' : 'NOT!!'
    }

    // Solution 2
    function specialNumber(n){
      return [...String(n)].every(num => '012345'.includes(num)) ? 'Special!!' : 'NOT!!'
    }

    // Tests
    console.log(specialNumber(2),"Special!!");
    console.log(specialNumber(3),"Special!!");
    console.log(specialNumber(6),"NOT!!");
    console.log(specialNumber(9),"NOT!!");
    console.log(specialNumber(11),"Special!!");
    console.log(specialNumber(55),"Special!!");
    console.log(specialNumber(26),"NOT!!");
    console.log(specialNumber(92),"NOT!!");
    console.log(specialNumber(25432),"Special!!");
    console.log(specialNumber(2783),"NOT!!");