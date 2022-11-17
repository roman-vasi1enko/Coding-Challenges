// Task 1 - Don't give me five!
  // you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

  // Examples:

  // 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
  // 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
  // The result may contain fives. ;-)
  // The start number will always be smaller than the end number. Both numbers can be also negative!

  // count every consecutive number (except 5) betwee two given nums (inclusive)
  // P: two nums, int, +-, 1>2
  // R: return, count of num

  // Solution

  function dontGiveMeFive(start, end){
    // 1. loop: start -> end, +1, conditional if i !includes 5 -> res++, return res
    let result = 0;
    
    for (let i = start; i <= end; i++) {
      !String(i).includes(5) ? result++ : i;
    }
    return result;
  }

  // Tests
  dontGiveMeFive(1,1) // 1
  dontGiveMeFive(1,3) // 3
  dontGiveMeFive(1,7) // 6
  dontGiveMeFive(3,8) // 5
  dontGiveMeFive(11,19) // 8
  dontGiveMeFive(4,17) // 12