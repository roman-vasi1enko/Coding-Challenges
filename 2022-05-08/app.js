// Task 1 - Is the string uppercase?
  //Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:
  // "c".isUpperCase() == false
  // "C".isUpperCase() == true
  // "hello I AM DONALD".isUpperCase() == false
  // "HELLO I AM DONALD".isUpperCase() == true
  // "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
  // "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
  // In this challenge, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

    // Solution
    String.prototype.isUpperCase = function() {
      return this == this.toUpperCase();
    }

    // Tests
    'c'.isUpperCase() //false, 'c is not upper case'
    'C'.isUpperCase() //true, 'C is upper case'
    'hello I AM DONALD'.isUpperCase() //false, 'hello I AM DONALD not is upper case'
    'HELLO I AM DONALD'.isUpperCase() //true, 'HELLO I AM DONALD is upper case'
    'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase() //false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case'
    'ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase() //true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case'


// Task 2 - Student's Final Grade
    //Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
    // This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
    // This function should return a number (final grade). There are four types of final grades:
    // 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    // 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    // 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    // 0, in other cases

      // Solution
      function finalGrade (exam, projects) {
        if (exam > 90 || projects > 10) {
          return 100;
        }
        else if (exam > 75 && projects >= 5) {
          return 90;
        }
        else if (exam > 50 && projects >= 2) {
          return 75;
        }
        else {
          return 0;
        }
      }

      // Tests
      finalGrade(100, 12) //100
      finalGrade(85, 5) //90