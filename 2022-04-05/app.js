// Task 1 - Remove First and Last Character
  // You are given a string containing a sequence of character sequences separated by commas.
  // Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
  // If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

  // Examples
  // "1,2,3"      =>  "2"
  // "1,2,3,4"    =>  "2 3"
  // "1,2,3,4,5"  =>  "2 3 4"
  // ""     =>  NULL
  // "1"    =>  NULL
  // "1,2"  =>  NULL

    // Solution
    function array(arr){
      //declare a new variable and assign the arr string as an array
      let array = arr.split(',');
      
      //check if the array has more than 2 elements, if not, return null
        //if more than 2 elements, remove 1st and last element
      if (array.length < 3) {
        return null;
      }
      else {
        array.shift();
        array.pop();
      }
      //return array as a space-separated string
      return array.join(' ')
    
    }
    
    // Tests
    array('1,2,3') //2
    array('1,2,3,4') //'2 3'
    array('') //null
    array('1,2') //null