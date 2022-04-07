// Task 1
    // Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

    // Return your answer as a number.

    // Solution
        function sumMix(x){
            return x.reduce((sum, n) => sum + Number(n), 0);
        }


//Task 2
    // Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

    // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

    // Mind the input validation.

    // Example
    // { 6, 2, 1, 8, 10 } => 16
    // { 1, 1, 11, 2, 3 } => 6
    // Input validation
    // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

    // Solution 1
    function sumArray(array) {
        let result = 0;
        if (Array.isArray(array) && array.length > 1) {
            result = array.reduce((sum, n) => sum + n, 0) - Math.min(...array) - Math.max(...array);
            return result;
        }
        else {
            return 0;
        }
    }
    
    // Solution 2
    let sumArray = array => Array.isArray(array) && array.length > 1 ? array.reduce((sum, n) => sum + n, 0) - Math.min(...array) - Math.max(...array) : 0;
