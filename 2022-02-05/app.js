// Task 1 - if..else and ternary operator
  //Complete function saleHotdogs. Function accept 1 parameter: n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

  // number         	            price (cents)
  // n < 5	                      100
  // n >= 5 and n < 10	          95
  // n >= 10	                    90

  // You can use if..else or ternary operator to complete it.

    // Solution
    function saleHotdogs(n){
      return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
    }

    // Tests
    saleHotdogs(1) // 100
    saleHotdogs(4) // 400
    saleHotdogs(5) // 475
    saleHotdogs(9) // 855
    saleHotdogs(10) // 900
    saleHotdogs(100) // 9000