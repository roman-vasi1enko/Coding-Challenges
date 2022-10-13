// Task 1 - squash the bugs, not the dogs!
  // Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

  // By fixing the function provided below, you will find out exactly how you should respond, depending on the number of dogs he has.

  // function howManyDalmations(numer :
  
  //   var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
    
  //   var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
    
  // return respond

  // The number of dogs will always be a number and there will always be at least 1 dog.

    // Solution
    function howManyDalmatians(number) {
  
      var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
      
      var respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ? dogs[3] : dogs[2];
      
      return respond;
    }

    // Tests
    howManyDalmatians(26) // "More than a handful!"
    howManyDalmatians(8) // "Hardly any"
    howManyDalmatians(14) // "More than a handful!"
    howManyDalmatians(80) // "Woah that's a lot of dogs!"
    howManyDalmatians(100) //  "Woah that's a lot of dogs!"
    howManyDalmatians(101) // "101 DALMATIANS!!!"