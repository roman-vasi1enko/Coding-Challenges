// Task - Insert dashes
// Write a function insertDash(num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

  // Solution
  function insertDash(num) {
    let arr = String(num).split('')
    
    for (let i = 0; i < arr.length-1; i++) {
      if(Number(arr[i]) % 2 !== 0 && Number(arr[i+1] % 2 !== 0)) {
        arr.splice(i+1, 0, '-'); 
        i++
      }
    }
  
    return arr.join('')
  }

  // Tests
  console.log(insertDash(454793),'4547-9-3');
  console.log(insertDash(123456),'123456');
  console.log(insertDash(1003567),'1003-567');