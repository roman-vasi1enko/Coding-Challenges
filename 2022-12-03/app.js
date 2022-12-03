// Task - Convert string to camel case
  // Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

  // Examples
  // "the-stealth-warrior" gets converted to "theStealthWarrior"
  // "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

    // Solution
    function toCamelCase(str){ 
      let arr = str.split('');
      for(i = 0; i < arr.length; i++){
        let letter = arr[i];
        if(letter == '_' || letter == '-') {
          arr[i + 1] = arr[i + 1].toUpperCase();
          arr[i] = '';
        } 
      }
      return arr.join('');
    }

    // Tests
    toCamelCase('') // '', "An empty string was provided but not returned"
    toCamelCase("the_stealth_warrior") // "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value"
    toCamelCase("The-Stealth-Warrior") // "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value"
    toCamelCase("A-B-C") // "ABC", "toCamelCase('A-B-C') did not return correct value"