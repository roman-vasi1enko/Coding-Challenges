// Task - Re-open class
  // Javascript lets you re-open classes so you can add new functionalities to existing classes and objects.

  // To demonstrate this, you'll have to add a new method (called my_new_method in Ruby or myNewMethod in JS) into the String class that simply calls the upcase method (toUpperCase() in Javascript), so that:

  // "abc".myNewMethod();
  // returns
  // "ABC"

    // Solution
    String.prototype.myNewMethod = function() {
      return this.toUpperCase();
    }

    // Test
    console.log("abc".myNewMethod(), "ABC", '"abc".myNewMethod() should return "ABC"');