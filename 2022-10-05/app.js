// Task - Filter even numbers
  // The solution would work like the following:
  // getEvenNumbers([2,4,5,6]) // should == [2,4,6]

    // Solution
    function getEvenNumbers(arr){
      return arr.filter(num => num % 2 === 0);
    }

    // Tests
    getEvenNumbers([1,2,3,6,8,10]) // [2,6,8,10]
    getEvenNumbers([1,2]) // [2]
    getEvenNumbers([12,14,15]) // [12,14]
    getEvenNumbers([13,15]) // []
    getEvenNumbers([1,3,9]) // []