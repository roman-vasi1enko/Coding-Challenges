// Task - Rotate for a Max
  // Take a number: 56789. Rotate left, you get 67895.

  // Keep the first digit in place and rotate left the other digits: 68957.

  // Keep the first two digits in place and rotate the other ones: 68579.

  // Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

  // You have the following sequence of numbers:

  // 56789 -> 67895 -> 68957 -> 68579 -> 68597

  // and you must return the greatest: 68957.

  // Task
  // Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

    // Solution
    function maxRot(n){
      let max = n
      let arr = String(n).split('')
      
      for(let i = 0; i < arr.length; i++){
        arr.push(arr.splice(i,1))
        const num = Number(arr.join(''))
        if(num > max) max = num
      }
      return max
    }

    // Tests
    console.log(maxRot(38458215), 85821534);
    console.log(maxRot(195881031), 988103115);
    console.log(maxRot(896219342), 962193428);
    console.log(maxRot(69418307), 94183076);