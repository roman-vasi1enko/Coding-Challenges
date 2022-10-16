// Task 1 - Simple Calculator
  // You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

  // Your function will accept three arguments:
  // The first and second argument should be numbers.
  // The third argument should represent a sign indicating the operation to perform on these two numbers.

  // if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

  // Example:
  // calculator(1,2,"+"); //=> result will be 3
  // calculator(1,2,"&"); //=> result will be "unknown value"
  // calculator(1,"k","*"); //=> result will be "unknown value"

    // Solution
    function calculator(a,b,sign){
      if (!Number(a) || !Number(b)) {
        return 'unknown value';
      }
      else {
        switch(sign) {
          case '+': return a + b; break;
          case '-': return a - b; break;
          case '*': return a * b; break;
          case '/': return a / b; break;
          default: return 'unknown value';
        }
      }
      
    }

    // Tests
    calculator(1,2,"+") // 3
    calculator(1,2,"-") // -1
    calculator(3,5,"*") // 15
    calculator(6,2,"/") // 3
    calculator(6,2,"$") // "unknown value"
    calculator(6,"h","*") // "unknown value"