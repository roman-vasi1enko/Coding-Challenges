// Task 1 - Substituting Variables Into Strings
  // Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

  // Example:
  // solution(5) // should return "Value is 00005"

    // Solution
    function solution(value){
      return `Value is ${String(value).padStart(5, 0)}`;
    }

    // Tests
    solution(5) // "Value is 00005"
    solution(1204) // "Value is 01204"
    solution(109) // "Value is 00109"
    solution(0) // "Value is 00000"