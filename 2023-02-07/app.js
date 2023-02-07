// Task - Product Array
  // Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

  // Notes
  // Array/list size is at least 2 .

  // Array/list's numbers Will be only Positives

  // Repetition of numbers in the array/list could occur.

  // Input >> Output Examples
  // productArray ({12,20}) ==>  return {20,12}
  // Explanation:
  // The first element in prod [] array 20 is the product of all array's elements except the first element

  // The second element 12 is the product of all array's elements except the second element .

  // productArray ({1,5,2}) ==> return {10,2,5}
  // Explanation:
  // The first element 10 is the product of all array's elements except the first element 1

  // The second element 2 is the product of all array's elements except the second element 5

  // The Third element 5 is the product of all array's elements except the Third element 2.

    // Solution
    function productArray(numbers){
      return numbers.map(el => numbers.reduce((sum, num) => sum * num, 1) / el);
    }

    // Tests
    console.log(productArray([12,20]), [20,12]);
    console.log(productArray([3,27,4,2]), [216,24,162,324]);
    console.log(productArray([13,10,5,2,9]), [900,1170,2340,5850,1300]);
    console.log(productArray([16,17,4,3,5,2]), [2040,1920,8160,10880,6528,16320]);